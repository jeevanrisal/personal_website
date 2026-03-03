"use client";

import { useEffect, useRef } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useMagnetic({ strength = 8, influence = 220 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const body = document.body;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let bounds = null;
    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;

      element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = window.requestAnimationFrame(render);
      } else {
        rafId = 0;
      }
    };

    const startAnimation = () => {
      if (!rafId) rafId = window.requestAnimationFrame(render);
    };

    const onPointerEnter = () => {
      bounds = element.getBoundingClientRect();
      element.classList.add("magnetic-active");
      body.classList.add("cursor-absorbed");
    };

    const onPointerMove = (event) => {
      if (!bounds) bounds = element.getBoundingClientRect();

      const offsetX = event.clientX - (bounds.left + bounds.width / 2);
      const offsetY = event.clientY - (bounds.top + bounds.height / 2);
      const distance = Math.hypot(offsetX, offsetY);
      const pull = Math.max(0, 1 - distance / influence);

      targetX = clamp(offsetX * 0.14 * pull, -strength, strength);
      targetY = clamp(offsetY * 0.14 * pull, -strength, strength);

      startAnimation();
    };

    const onPointerLeave = () => {
      targetX = 0;
      targetY = 0;
      bounds = null;
      element.classList.remove("magnetic-active");
      body.classList.remove("cursor-absorbed");
      startAnimation();
    };

    const resetBounds = () => {
      bounds = null;
    };

    element.style.willChange = "transform";
    element.addEventListener("pointerenter", onPointerEnter);
    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", resetBounds);
    window.addEventListener("scroll", resetBounds, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      element.removeEventListener("pointerenter", onPointerEnter);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", resetBounds);
      window.removeEventListener("scroll", resetBounds);
      element.style.willChange = "";
      element.style.transform = "";
      element.classList.remove("magnetic-active");
      body.classList.remove("cursor-absorbed");
    };
  }, [strength, influence]);

  return ref;
}
