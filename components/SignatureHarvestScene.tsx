"use client";

import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Html,
  Lightformer,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";

/** Premium Egyptian dates product GLB. */
const OPEN_SRC = "/models/dates.glb";
const USE_DRACO = false as const;
const CINEMATIC_EXPOSURE = 1.22;

export type HarvestIntro = {
  t: number;
  rotating: boolean;
};

type SceneProps = {
  introRef: MutableRefObject<HarvestIntro>;
  reducedMotion: boolean;
  mobile: boolean;
};

function prepareDates(root: THREE.Object3D, mobile: boolean) {
  const anisotropy = mobile ? 6 : 12;
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh) return;
    mesh.frustumCulled = true;
    mesh.castShadow = false;
    mesh.receiveShadow = false;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((mat) => {
      if (!mat) return;
      const m = mat as THREE.MeshStandardMaterial;
      if (m.map) {
        m.map.colorSpace = THREE.SRGBColorSpace;
        m.map.anisotropy = anisotropy;
        m.map.needsUpdate = true;
      }
      if (m.normalMap) {
        m.normalMap.anisotropy = anisotropy;
        m.normalMap.needsUpdate = true;
      }
      if ("envMapIntensity" in m) {
        m.envMapIntensity = mobile ? 0.62 : 0.78;
      }
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

function DatesHero({ introRef, reducedMotion, mobile }: SceneProps) {
  const gltf = useGLTF(OPEN_SRC, USE_DRACO);
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const spinRef = useRef(0.22);
  const { gl, camera } = useThree();

  const scene = useMemo(() => {
    const cloned = gltf.scene.clone(true);
    prepareDates(cloned, mobile);
    fitToSize(cloned, mobile ? 2.35 : 2.65);
    return cloned;
  }, [gltf.scene, mobile]);

  useLayoutEffect(() => {
    gl.setClearColor(0x000000, 0);
    gl.setClearAlpha(0);
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = CINEMATIC_EXPOSURE;
  }, [gl]);

  useEffect(() => {
    camera.near = 0.1;
    camera.far = 40;
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.fov = mobile ? 28 : 23;
    }
    camera.updateProjectionMatrix();
  }, [camera, mobile]);

  useEffect(() => {
    const el = gl.domElement;
    const onDown = () => {
      el.style.cursor = "grabbing";
    };
    const onUp = () => {
      el.style.cursor = "grab";
    };
    el.style.cursor = "grab";
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointerleave", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointerleave", onUp);
    };
  }, [gl]);

  useFrame(() => {
    const g = groupRef.current;
    if (!g) return;

    const intro = introRef.current;
    const t = reducedMotion ? 1 : THREE.MathUtils.clamp(intro.t, 0, 1);
    const e = t * t * (3 - 2 * t);
    const canOrbit = reducedMotion || intro.rotating || t >= 0.98;

    const restY = mobile ? 0.02 : 0.04;
    g.position.set(0, restY + (1 - e) * -0.38, 0);
    g.scale.setScalar(THREE.MathUtils.lerp(0.82, 1, e));
    g.visible = true;

    g.rotation.x = 0.12;
    g.rotation.z = 0.02;

    if (!canOrbit) {
      spinRef.current = THREE.MathUtils.lerp(0.08, 0.22, e);
    }
    g.rotation.y = spinRef.current;

    if (controlsRef.current) {
      controlsRef.current.enabled = canOrbit;
      controlsRef.current.autoRotate = canOrbit && !reducedMotion;
      controlsRef.current.target.set(0, restY, 0);
    }
  });

  const shadowY = mobile ? -1.02 : -1.08;
  const restY = mobile ? 0.02 : 0.04;

  return (
    <>
      <directionalLight
        position={[5.8, 7.6, 6.4]}
        intensity={mobile ? 2.1 : 2.75}
        color="#fff0d6"
      />
      <directionalLight
        position={[-5.2, 3.2, 4.8]}
        intensity={mobile ? 0.35 : 0.5}
        color="#b8d8c8"
      />
      <directionalLight
        position={[-1.6, 5.4, -7.4]}
        intensity={mobile ? 0.85 : 1.25}
        color="#ffab55"
      />
      <spotLight
        position={[1, 10, 4]}
        angle={0.38}
        penumbra={0.9}
        intensity={mobile ? 0.6 : 0.95}
        color="#fffaf2"
        distance={20}
      />
      <ambientLight intensity={0.07} color="#fff8f0" />
      <hemisphereLight args={["#fff6eb", "#1c1208", mobile ? 0.26 : 0.36]} />
      <Environment resolution={mobile ? 256 : 512} frames={1} blur={0.75}>
        <Lightformer
          form="rect"
          intensity={2.2}
          color="#fff4e6"
          rotation={[0, 0, 0]}
          position={[0, 4, 5]}
          scale={[10, 4, 1]}
        />
        <Lightformer
          form="rect"
          intensity={0.9}
          color="#ffd099"
          rotation={[0, Math.PI / 2, 0]}
          position={[-6, 2.5, 0]}
          scale={[5, 2.5, 1]}
        />
      </Environment>

      <group ref={groupRef}>
        <primitive object={scene} />
      </group>

      {!mobile && (
        <ContactShadows
          position={[0, shadowY, 0]}
          opacity={0.42}
          scale={5.8}
          blur={2.8}
          far={3.6}
          resolution={256}
          color="#120a04"
          frames={1}
        />
      )}

      <OrbitControls
        ref={controlsRef}
        makeDefault
        enablePan={false}
        enableZoom
        enableRotate
        enableDamping
        dampingFactor={0.06}
        autoRotate
        autoRotateSpeed={1.1}
        rotateSpeed={0.65}
        zoomSpeed={0.48}
        minDistance={mobile ? 3.2 : 3.6}
        maxDistance={mobile ? 6.8 : 7.4}
        minPolarAngle={Math.PI * 0.32}
        maxPolarAngle={Math.PI * 0.68}
        target={[0, restY, 0]}
      />
    </>
  );
}

export default function SignatureHarvestScene(props: SceneProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [frameloop, setFrameloop] = useState<"always" | "never">("never");
  const [active, setActive] = useState(false);
  const maxDpr = props.mobile ? 1 : 1.25;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      setFrameloop("always");
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          setFrameloop("always");
        } else {
          setFrameloop("never");
        }
      },
      { root: null, rootMargin: "220px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="harvest-canvas-wrap"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      {active ? (
        <Canvas
          dpr={[1, maxDpr]}
          frameloop={frameloop}
          gl={{
            antialias: !props.mobile,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
            outputColorSpace: THREE.SRGBColorSpace,
            toneMapping: THREE.ACESFilmicToneMapping,
          }}
          camera={{
            position: [0, props.mobile ? 0.18 : 0.22, props.mobile ? 5.0 : 5.35],
            fov: props.mobile ? 28 : 23,
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
            gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, maxDpr));
            gl.setClearColor(0x000000, 0);
            gl.setClearAlpha(0);
            gl.toneMappingExposure = CINEMATIC_EXPOSURE;
          }}
        >
          <Suspense
            fallback={
              <Html center>
                <div className="harvest-loader">Preparing harvest…</div>
              </Html>
            }
          >
            <DatesHero {...props} />
          </Suspense>
        </Canvas>
      ) : (
        <div className="harvest-loader harvest-loader--placeholder">
          Preparing harvest…
        </div>
      )}
    </div>
  );
}

export function preloadHarvestModels() {
  useGLTF.preload(OPEN_SRC, USE_DRACO);
}
