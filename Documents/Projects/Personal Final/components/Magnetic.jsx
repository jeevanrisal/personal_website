"use client";

import { useMagnetic } from "@/hooks/useMagnetic";

export default function Magnetic({ as: Component = "div", className = "", strength = 8, children, ...props }) {
  const magneticRef = useMagnetic({ strength });

  return (
    <Component ref={magneticRef} className={`magnetic-target ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}
