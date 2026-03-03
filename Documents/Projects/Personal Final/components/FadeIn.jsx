"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeIn({ children, className = "", delay = 0, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-up ${visible ? "is-visible" : ""} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
