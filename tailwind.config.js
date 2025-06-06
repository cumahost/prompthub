// File: tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: '#2563eb', // Biru
          secondary: '#64748b', // Abu-abu
          accent: '#EF4444', // Merah
          background: '#F3F4F6', // Abu-abu terang
          text: '#111827', // Abu-abu gelap
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Aktifkan jika ingin toggle dark mode
}
