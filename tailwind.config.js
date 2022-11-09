/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.{js,ts,vue}',
    './App.{js,ts,vue}',
    './error.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.{vue}',
    './pages/**/*.{vue}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
