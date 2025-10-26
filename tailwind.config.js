export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Accessible color pallete
        primary: {
          50: "#e5f7f7",
          100: "#b8eaea",
          200: "#8ada8c",
          300: "#5ccdcc",
          400: "#33bdbd",
          500: "#009898", // closest to base #005d5d balanced midpoint
          600: "#007575",
          700: "#005d5d",
          800: "#004444",
          900: "#002f2f",
        },
        success: {
          50: "#e9f6ee",
          100: "#c3e9cf",
          200: "#9ddcad",
          300: "#72cf87",
          400: "#47c168",
          500: "#198038", // base color
          600: "#156c31",
          700: "#115828",
          800: "#0c441e",
          900: "#083015",
        },
        warning: {
          50: "#fffbea",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#facc15",
          500: "#f1c21b", // base color
          600: "#d6a613",
          700: "#b98a0f",
          800: "#946b0b",
          900: "#6e4d07",
        },
        error: {
          50: "#fdeaea",
          100: "#f8cccc",
          200: "#f2a9a9",
          300: "#ec8585",
          400: "#e65f5f",
          500: "#da1e28", // base red
          600: "#bf1923",
          700: "#a4141d",
          800: "#880f17",
          900: "#6a0b11",
        },
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
            '0%' : { opacticy: '0' },
            '100%': { opacity: '1' },
        },
        slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' }
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
