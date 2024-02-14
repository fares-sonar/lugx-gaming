/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bsBlue: "#0d6efd",
        bsPink: " #d63384",
        bsRed: "#dc3545",
        lightRed: "#ee626b",
      },
      boxShadow: {
        shadow: "0px 0px 15px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
