"use client";

import { useEffect, useRef } from "react";

export default function PointerEffects() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return undefined;

    const body = document.body;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId = 0;

    body.classList.add("custom-cursor-enabled");

    const placeDot = (x, y) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = window.requestAnimationFrame(animateRing);
    };

    const onMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      placeDot(mouseX, mouseY);
      body.classList.remove("cursor-hidden");
    };

    const onLeave = () => body.classList.add("cursor-hidden");
    const onEnter = () => body.classList.remove("cursor-hidden");

    placeDot(mouseX, mouseY);
    animateRing();

    window.addEventListener("pointermove", onMove);
    window.addEventListener("blur", onLeave);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      body.classList.remove("custom-cursor-enabled", "cursor-hidden", "cursor-absorbed");
    };
  }, []);

  return (
    <>
      <div aria-hidden ref={ringRef} className="cursor-ring" />
      <div aria-hidden ref={dotRef} className="cursor-dot" />
    </>
  );
}
