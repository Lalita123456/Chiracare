/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'bluetext':'#172554',
         300:'#d1d5db',
         'gray':'#737791',
         'bluesky' :'#5D97EF'
      }
    },
  },
  plugins: [],
}

