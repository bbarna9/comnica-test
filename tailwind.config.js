/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#31363c",
        "turquoise-1": "#29a98b",
        "turquoise-2": "#20876f",
        "turquoise-3": "#186553",
        claret: "#682c5d",
      },
    },
  },
  plugins: [],
};
