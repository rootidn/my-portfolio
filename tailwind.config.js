/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "first-color": "var(--first-color)",
        "title-color": "var(--title-color)",
        'text-color' : "var(--text-color)",
        'body-color' : "var(--body-color)",
        'container-color' : "var(--container-color)",
      },
    },
  },
  plugins: [],
}

