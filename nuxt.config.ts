// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss"
  ],
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
  },
});
