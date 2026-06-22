/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#020617",
          900: "#06111f",
          850: "#0a1628",
          800: "#0f1e33",
          700: "#162a45"
        },
        electric: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2"
        },
        signal: {
          300: "#93c5fd",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7"
        }
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
        display: [
          "Plus Jakarta Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 70px rgba(14, 165, 233, 0.22)",
        cyan: "0 0 55px rgba(34, 211, 238, 0.18)"
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)"
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-14px)"
          }
        },
        pulseLine: {
          "0%, 100%": {
            opacity: "0.35",
            transform: "scaleX(0.55)"
          },
          "50%": {
            opacity: "1",
            transform: "scaleX(1)"
          }
        },
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateX(10px) rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg) translateX(10px) rotate(-360deg)"
          }
        },
        typing: {
          "0%": {
            width: "0"
          },
          "100%": {
            width: "100%"
          }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
        "pulse-line": "pulseLine 2.4s ease-in-out infinite",
        typing: "typing 2.8s steps(28, end) both"
      }
    }
  },
  plugins: []
};
