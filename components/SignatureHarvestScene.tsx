"use client";

import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  type MutableRefObject,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Html, OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";

const WHOLE_SRC = "/models/cara_cara.glb";
const OPEN_SRC = "/models/orange_cut_half_orange_fruit.glb";

type SceneProps = {
  progressRef: MutableRefObject<number>;
  reducedMotion: boolean;
  mobile: boolean;
};

function clamp01(v: number) {
  return Math.min(1, Math.max(0, v));
}

function smoothstep(a: number, b: number, x: number) {
  const t = clamp01((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - clamp01(t), 3);
}

function easeInOutCubic(t: number) {
  const x = clamp01(t);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

function easeInCubic(t: number) {
  const x = clamp01(t);
  return x * x * x;
}

function prepareFruit(root: THREE.Object3D) {
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.frustumCulled = true;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((mat) => {
      if (!mat) return;
      const m = mat as THREE.MeshStandardMaterial;
      if (m.map) {
        m.map.colorSpace = THREE.SRGBColorSpace;
        m.map.anisotropy = 4;
        m.map.needsUpdate = true;
      }
      if (m.color) m.color.set("#ffffff");
      if ("metalness" in m) m.metalness = 0;
      if ("roughness" in m && (m.roughness ?? 1) < 0.25) m.roughness = 0.48;
      m.transparent = false;
      m.opacity = 1;
      m.depthWrite = true;
      m.needsUpdate = true;
    });
  });
}

function fitToSize(object: THREE.Object3D, targetSize: number) {
  object.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  const maxDim = Math.max(size.x, size.y, size.z) || 1;
  object.position.sub(center);
  object.scale.setScalar(targetSize / maxDim);
  object.updateMatrixWorld(true);
  const box2 = new THREE.Box3().setFromObject(object);
  const center2 = new THREE.Vector3();
  box2.getCenter(center2);
  object.position.sub(center2);
}

function bounceY(t: number) {
  const x = clamp01(t);
  if (x < 0.34) return Math.sin((x / 0.34) * Math.PI) * 0.42;
  if (x < 0.64) return Math.sin(((x - 0.34) / 0.3) * Math.PI) * 0.2;
  if (x < 0.86) return Math.sin(((x - 0.64) / 0.22) * Math.PI) * 0.08;
  return Math.sin(((x - 0.86) / 0.14) * Math.PI) * 0.028;
}

function bounceSquash(t: number) {
  const x = clamp01(t);
  if (x < 0.1) return 1 - easeOutCubic(x / 0.1) * 0.08;
  if (x < 0.26) return 0.92 + easeOutCubic((x - 0.1) / 0.16) * 0.1;
  if (x < 0.42) return 1.02 - ((x - 0.26) / 0.16) * 0.03;
  return 1;
}

type HalfParts = {
  a: THREE.Object3D;
  b: THREE.Object3D;
  baseA: THREE.Vector3;
  baseB: THREE.Vector3;
};

function HarvestOranges({ progressRef, reducedMotion, mobile }: SceneProps) {
  const wholeGltf = useGLTF(WHOLE_SRC);
  const openGltf = useGLTF(OPEN_SRC);

  const wholeScene = useMemo(() => {
    const cloned = wholeGltf.scene.clone(true);
    prepareFruit(cloned);
    fitToSize(cloned, mobile ? 1.95 : 2.45);
    return cloned;
  }, [wholeGltf.scene, mobile]);

  const { openScene, halves } = useMemo(() => {
    const cloned = openGltf.scene.clone(true);
    prepareFruit(cloned);
    fitToSize(cloned, mobile ? 1.95 : 2.45);

    const a =
      cloned.getObjectByName("Orange") ||
      cloned.getObjectByName("Orange_Orange_0");
    const b =
      cloned.getObjectByName("Orange_Half") ||
      cloned.getObjectByName("Orange_Half_Orange Half_0");

    let halfParts: HalfParts | null = null;
    if (a && b) {
      halfParts = {
        a,
        b,
        baseA: a.position.clone(),
        baseB: b.position.clone(),
      };
    }

    return { openScene: cloned, halves: halfParts };
  }, [openGltf.scene, mobile]);

  const wholeRef = useRef<THREE.Group>(null);
  const openRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const clockRef = useRef(0);
  const lookRef = useRef(new THREE.Vector3(0, 0.05, 0));
  const camTarget = useRef(new THREE.Vector3());
  const interactiveRef = useRef(false);
  const restY = mobile ? 0.18 : 0.28;
  const { camera, gl } = useThree();

  useLayoutEffect(() => {
    gl.setClearColor(0x000000, 0);
    gl.setClearAlpha(0);
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.08;
  }, [gl]);

  useEffect(() => {
    camera.near = 0.1;
    camera.far = 40;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame((_, delta) => {
    clockRef.current += delta;
    const t = clockRef.current;
    const p = reducedMotion ? 1 : clamp01(progressRef.current);
    const canDrag = p >= 0.92 || reducedMotion;
    interactiveRef.current = canDrag;

    if (controlsRef.current) {
      controlsRef.current.enabled = canDrag;
      controlsRef.current.autoRotate = canDrag && !reducedMotion;
      controlsRef.current.autoRotateSpeed = 0.7;
      controlsRef.current.target.set(0, restY, 0);
    }

    // Fast fall → bounce → spin → cut → settle
    const fallT = smoothstep(0, 0.2, p);
    const bounceT = smoothstep(0.2, 0.4, p);
    const spinT = smoothstep(0.36, 0.5, p);
    const swapped = p >= 0.5;
    const splitT = smoothstep(0.5, 0.82, p);
    const settleT = smoothstep(0.8, 1, p);

    const startY = mobile ? 2.65 : 3.2;
    const fallY = THREE.MathUtils.lerp(startY, restY, easeInCubic(fallT));
    const yBounce = bounceT > 0 && fallT >= 1 ? bounceY(bounceT) : 0;
    const squash = fallT >= 1 ? bounceSquash(bounceT) : 1;
    const floatY =
      swapped || spinT <= 0 ? 0 : Math.sin(t * 0.7) * 0.012 * spinT;

    const stageX = 0;
    const stageY = fallY + yBounce + floatY;

    if (wholeRef.current) {
      const show = !swapped;
      wholeRef.current.visible = show;
      if (show) {
        wholeRef.current.position.set(stageX, stageY, 0);
        if (!canDrag) {
          const spinAmt = Math.max(spinT, fallT * 0.22);
          wholeRef.current.rotation.set(
            0.06 + spinT * 0.08,
            t * 0.38 * spinAmt + spinT * 0.22,
            0.02
          );
        }
        wholeRef.current.scale.set(1, squash, 1);
      }
    }

    if (openRef.current) {
      openRef.current.visible = swapped;
      if (swapped) {
        const openY = restY + (yBounce + floatY) * (1 - settleT * 0.1);
        openRef.current.position.set(stageX, openY, 0);

        if (!canDrag) {
          openRef.current.rotation.set(
            0.14,
            -0.16 + splitT * 0.22 + settleT * t * 0.1,
            0.015
          );
        }

        if (halves) {
          const { a, b, baseA, baseB } = halves;
          const sep = THREE.MathUtils.lerp(0.05, 0.92, easeInOutCubic(splitT));

          a.position.set(baseA.x * sep, baseA.y, baseA.z * sep);
          b.position.set(baseB.x * sep, baseB.y, baseB.z * sep);

          const tip = easeInOutCubic(splitT) * 0.42;
          a.rotation.set(-0.08 * tip, 0.12 * tip, 0);
          b.rotation.set(0.06 * tip, -0.12 * tip, 0);

          a.visible = true;
          b.visible = true;
        }
      }
    }

    // Hand camera to OrbitControls once drag is unlocked
    if (canDrag) return;

    const camT = easeInOutCubic(spinT * 0.3 + splitT * 0.7);
    camTarget.current.set(
      THREE.MathUtils.lerp(0, mobile ? 0.02 : 0.03, camT),
      THREE.MathUtils.lerp(restY + 0.08, restY + 0.04, Math.max(fallT * 0.7, camT)),
      THREE.MathUtils.lerp(mobile ? 5.05 : 5.35, mobile ? 4.25 : 4.4, camT)
    );
    camera.position.lerp(camTarget.current, 1 - Math.exp(-5.2 * delta));

    lookRef.current.lerp(
      new THREE.Vector3(
        stageX,
        THREE.MathUtils.lerp(stageY * 0.35, restY, fallT),
        0
      ),
      1 - Math.exp(-5.5 * delta)
    );
    camera.lookAt(lookRef.current);
  });

  return (
    <>
      <ambientLight intensity={0.72} color="#fff8ef" />
      <hemisphereLight args={["#fffaf2", "#cbb89a", 0.42]} />
      <directionalLight
        position={[3.6, 5.2, 2.8]}
        intensity={1.28}
        color="#fff1de"
      />
      <directionalLight
        position={[-2.8, 2.2, 2.2]}
        intensity={0.38}
        color="#f3ebe0"
      />
      <directionalLight
        position={[0.15, 1.8, -2.6]}
        intensity={0.46}
        color="#ffe6c4"
      />

      <group ref={wholeRef}>
        <primitive object={wholeScene} />
      </group>
      <group ref={openRef} visible={false}>
        <primitive object={openScene} />
      </group>

      <ContactShadows
        position={[0, mobile ? -0.95 : -0.85, 0]}
        opacity={0.14}
        scale={4}
        blur={2.2}
        far={2.2}
        resolution={128}
        color="#6b4423"
        frames={1}
      />

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        enableZoom
        enableRotate
        enableDamping
        dampingFactor={0.08}
        autoRotate
        autoRotateSpeed={0.7}
        rotateSpeed={0.85}
        zoomSpeed={0.65}
        minDistance={mobile ? 3.4 : 3.6}
        maxDistance={mobile ? 7.2 : 7.8}
        minPolarAngle={Math.PI * 0.28}
        maxPolarAngle={Math.PI * 0.72}
        target={[0, restY, 0]}
      />
    </>
  );
}

export default function SignatureHarvestScene(props: SceneProps) {
  return (
    <Canvas
      dpr={[1, props.mobile ? 1.15 : 1.4]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
        outputColorSpace: THREE.SRGBColorSpace,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      camera={{
        position: [0, props.mobile ? 0.28 : 0.36, props.mobile ? 5.05 : 5.35],
        fov: props.mobile ? 36 : 30,
        near: 0.1,
        far: 40,
      }}
      style={{
        background: "transparent",
        width: "100%",
        height: "100%",
        display: "block",
        touchAction: "none",
        cursor: "grab",
      }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
        gl.setClearAlpha(0);
        gl.toneMappingExposure = 1.08;
        gl.domElement.addEventListener("pointerdown", () => {
          gl.domElement.style.cursor = "grabbing";
        });
        gl.domElement.addEventListener("pointerup", () => {
          gl.domElement.style.cursor = "grab";
        });
      }}
    >
      <Suspense
        fallback={
          <Html center>
            <div className="harvest-loader">Preparing harvest…</div>
          </Html>
        }
      >
        <HarvestOranges {...props} />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload(WHOLE_SRC);
useGLTF.preload(OPEN_SRC);

export function preloadHarvestModels() {
  useGLTF.preload(WHOLE_SRC);
  useGLTF.preload(OPEN_SRC);
}
