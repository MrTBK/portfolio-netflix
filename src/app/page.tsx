"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IntroPage() {
  const [animating, setAnimating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (animating) {
      const timer = setTimeout(() => {
        router.push("/browse");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [animating, router]);

  const handleClick = () => {
    if (animating) return;
    try {
      const audio = new Audio("/sites/sumanthsamala/netflix-sound.a13a4aedfb5da5a27f04.mp3");
      audio.play().catch((err) => {
        console.log("Audio play error:", err);
      });
    } catch {
      // Audio autoplay policy fallback
    }
    setAnimating(true);
  };

  return (
    <div
      className="netflix-container cursor-pointer select-none"
      onClick={handleClick}
      title="Click to enter"
    >
      <img
        src="/sites/sumanthsamala/aziz-tabakh-logo.png"
        alt="AZIZ TABAKH"
        className={`netflix-logo ${animating ? "animate" : ""}`}
      />
    </div>
  );
}
