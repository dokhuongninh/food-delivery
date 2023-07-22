/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "page-not-found": "url('./src/assets/images/page-not-found.png')",
      },
    },
    variants: {
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  plugins: [],
};
