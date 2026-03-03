/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0d12",
        charcoal: "#0f141d",
        panel: "#141b27",
        edge: "#263042",
        accent: "#7f9cf5",
        orange: "#ff8c5a",
        electric: "#38bdf8"
      },
      boxShadow: {
        glass: "0 20px 60px rgba(0, 0, 0, 0.35)",
        glow: "0 0 0 1px rgba(127,156,245,0.2), 0 10px 35px rgba(127,156,245,0.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(127,156,245,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(127,156,245,0.08) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
