/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        card: "#141414",
        border: "rgba(255, 255, 255, 0.08)",
        primary: {
          light: "#BBCCD7",
          dark: "#646973",
        },
        accent: {
          blue: "#38bdf8",
          purple: "#c084fc",
          emerald: "#34d399",
          orange: "#fb923c",
        }
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      animation: {
        'marquee-slow': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
