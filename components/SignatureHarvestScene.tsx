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
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";

/** Draco-compressed, mesh-simplified citrus splash (~9MB vs ~79MB source). */
const OPEN_SRC = "/models/citrus-splash.glb";
const USE_DRACO = true as const;

export type HarvestIntro = {
  /** 0–1 entrance progress driven by GSAP */
  t: number;
  /** Start slow spin after entrance */
  rotating: boolean;
};

type SceneProps = {
  introRef: MutableRefObject<HarvestIntro>;
  reducedMotion: boolean;
  mobile: boolean;
};

function prepareOpenFruit(root: THREE.Object3D, mobile: boolean) {
  const anisotropy = mobile ? 2 : 4;
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
        m.normalScale?.set(0.85, 0.85);
        m.normalMap.needsUpdate = true;
      }
      // Keep Meshy baked albedo; only gently normalize PBR response
      if ("metalness" in m) m.metalness = Math.min(m.metalness ?? 0, 0.08);
      if ("roughness" in m) {
        const r = m.roughness ?? 0.55;
        m.roughness = THREE.MathUtils.clamp(r, 0.35, 0.85);
      }
      if ("envMapIntensity" in m) m.envMapIntensity = 0.22;
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

function OpenOrangeHero({ introRef, reducedMotion, mobile }: SceneProps) {
  const gltf = useGLTF(OPEN_SRC, USE_DRACO);
  const groupRef = useRef<THREE.Group>(null);
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const spinRef = useRef(0.28);
  const { gl, camera } = useThree();

  const scene = useMemo(() => {
    const cloned = gltf.scene.clone(true);
    prepareOpenFruit(cloned, mobile);
    fitToSize(cloned, mobile ? 2.15 : 2.45);
    return cloned;
  }, [gltf.scene, mobile]);

  useLayoutEffect(() => {
    gl.setClearColor(0x000000, 0);
    gl.setClearAlpha(0);
    gl.outputColorSpace = THREE.SRGBColorSpace;
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.toneMappingExposure = 1.05;
  }, [gl]);

  useEffect(() => {
    camera.near = 0.1;
    camera.far = 40;
    camera.updateProjectionMatrix();
  }, [camera]);

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

    const restY = mobile ? 0.08 : 0.1;
    g.position.set(0, restY + (1 - e) * -0.45, 0);
    g.scale.setScalar(THREE.MathUtils.lerp(0.78, 1, e));
    g.visible = true;

    g.rotation.x = 0.18;
    g.rotation.z = 0.03;

    if (!canOrbit) {
      spinRef.current = THREE.MathUtils.lerp(0.12, 0.28, e);
    }
    g.rotation.y = spinRef.current;

    if (controlsRef.current) {
      controlsRef.current.enabled = canOrbit;
      controlsRef.current.autoRotate = canOrbit && !reducedMotion;
      controlsRef.current.target.set(0, restY, 0);
    }
  });

  const shadowY = mobile ? -1.05 : -1.12;
  const restY = mobile ? 0.08 : 0.1;

  return (
    <>
      <directionalLight
        position={[3.2, 5.4, 4.0]}
        intensity={1.35}
        color="#fff6ea"
      />
      <directionalLight
        position={[-2.8, 1.8, -2.4]}
        intensity={0.5}
        color="#ffd7a0"
      />
      <ambientLight intensity={0.55} color="#fff9f0" />
      <hemisphereLight args={["#fffaf4", "#d2c0a6", 0.4]} />

      <group ref={groupRef}>
        <primitive object={scene} />
      </group>

      {!mobile && (
        <ContactShadows
          position={[0, shadowY, 0]}
          opacity={0.28}
          scale={5.2}
          blur={2.6}
          far={3.4}
          resolution={128}
          color="#4a311c"
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
        autoRotateSpeed={1.35}
        rotateSpeed={0.7}
        zoomSpeed={0.5}
        minDistance={mobile ? 3.4 : 3.8}
        maxDistance={mobile ? 7.2 : 7.8}
        minPolarAngle={Math.PI * 0.28}
        maxPolarAngle={Math.PI * 0.72}
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
            position: [0, props.mobile ? 0.22 : 0.28, props.mobile ? 5.2 : 5.5],
            fov: props.mobile ? 34 : 28,
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
            gl.toneMappingExposure = 1.05;
          }}
        >
          <Suspense
            fallback={
              <Html center>
                <div className="harvest-loader">Preparing harvest…</div>
              </Html>
            }
          >
            <OpenOrangeHero {...props} />
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
