/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
        map[index] = `${index}px`;
        return map;
    }, {}),
    },
    plugins: [],
  }