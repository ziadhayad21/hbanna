"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const WHOLE = "/models/cara_cara.glb";
const OPEN = "/models/orange_cut_half_orange_fruit.glb";

/** Warm GLB cache as soon as the homepage mounts — kills first-visit hitch. */
export default function PreloadHarvest() {
  useEffect(() => {
    useGLTF.preload(WHOLE);
    useGLTF.preload(OPEN);

    const loader = new GLTFLoader();
    let cancelled = false;

    Promise.all([loader.loadAsync(WHOLE), loader.loadAsync(OPEN)])
      .then(() => {
        if (!cancelled) {
          // Touch GPU decode path early
          useGLTF.preload(WHOLE);
          useGLTF.preload(OPEN);
        }
      })
      .catch(() => {
        /* ignore — scene Suspense will retry */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
