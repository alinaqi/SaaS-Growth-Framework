/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1877F2',
        'primary-dark': '#166FE5',
        secondary: '#42B72A',
        'secondary-dark': '#36A420',
        text: '#333',
        'light-bg': '#F0F2F5',
        white: '#fff',
        border: '#ddd',
      },
    },
  },
  plugins: [],
} 