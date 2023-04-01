// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/color-mode', '@vueuse/nuxt'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/main.css'],
});
