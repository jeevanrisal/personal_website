"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("theme-light", isLight);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("theme-light", next);
    window.localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass-button focus-ring rounded-full p-2.5"
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Switch to dark theme" : "Switch to light theme"}
    >
      {light ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
    </button>
  );
}
