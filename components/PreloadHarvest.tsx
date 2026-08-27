"use client";

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const OPEN = "/models/orange_cut_half_orange_fruit.glb";

/** Warm open-orange GLB cache only — whole orange is unused in this section. */
export default function PreloadHarvest() {
  useEffect(() => {
    useGLTF.preload(OPEN);
  }, []);

  return null;
}
