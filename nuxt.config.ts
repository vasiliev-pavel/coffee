// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",

  ],
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
  },
  css: [
    '@/assets/css/main.css',
  ],
  supabase: {
    redirect: false,
    // redirectOptions: {
    //   login: "/login",
    //   callback: "/confirm",
    //   exclude: [],
    // },
    // realtime: {
    //   eventsPerSecond: 2,
    // },
  },
});
