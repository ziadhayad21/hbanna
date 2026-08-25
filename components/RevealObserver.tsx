"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

/** Mounts the global reveal-on-scroll observer once for the page. */
export default function RevealObserver() {
  useRevealOnScroll(true);
  return null;
}
