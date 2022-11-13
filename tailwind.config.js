/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
