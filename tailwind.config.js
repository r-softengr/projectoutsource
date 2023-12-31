/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#ffffff",
        primary: "#0a6ac0",
        secondary: "#10abe1",
        customBlack: "#4e4d4e",
        customGreen: "#b4c292",
        customOrange: "#e29563",
        customGray: "#e4dcd9",
      },
      backgroundImage: {
        "prop-mgmt":
          "url('https://images.unsplash.com/photo-1606836559739-7b1d9fbf8a6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "book-keeping":
          "url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        "graphic-design":
          "url('https://images.unsplash.com/photo-1608699565448-9492aaf3c708?q=80&w=2151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        profile:
          "url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
