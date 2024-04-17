/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.tsx",
  ],
  theme: {
    extend: {
      fontSize: {},
    },
  },
  plugins: [],
};
