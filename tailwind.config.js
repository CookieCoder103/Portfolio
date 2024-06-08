
/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["wireframe", "business"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [require('daisyui')],
};
