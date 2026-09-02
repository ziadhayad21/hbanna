"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function InitialLoader() {
  const [fade, setFade] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Keep the loading screen visible with its animation for exactly 2 seconds
    const timer = setTimeout(() => {
      setFade(true); // Smoothly fades out the loading screen

      const cleanupTimer = setTimeout(() => {
        // After fade completes, remove show-loader from html to enable scrolling
        document.documentElement.classList.remove("show-loader");
        setMounted(false);
      }, 600); // 600ms smooth fade transition

      return () => clearTimeout(cleanupTimer);
    }, 2000); // 2 seconds duration

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`initial-loader ${fade ? "fade-out" : ""}`}>
      <div className="loader-logo-wrap">
        <Image
          src="/hbanna-logo.png"
          alt="HBanna Logo"
          width={280}
          height={140}
          priority
          className="loader-logo"
        />
      </div>
    </div>
  );
}
