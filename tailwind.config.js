/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FBF2E3',
        },
        accent: {
          DEFAULT: '#92140c',
        },
        secondary: {
          DEFAULT: '#92140c',
        },
        background: {
          DEFAULT: '#fff8f0',
        },
        surface: '#fff',
        text: {
          DEFAULT: '#1e1e24',
        },
      },
    },
  },
  plugins: [],
}
