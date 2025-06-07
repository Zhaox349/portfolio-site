// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/scripts", "@nuxt/image", "@nuxt/eslint", "@nuxt/ui"],

  ui: {
    fonts: false,
  },

  // 全局CSS
  css: ["@/assets/scss/global.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
             @use "~/assets/scss/variables.scss" as variable;
             @use "~/assets/scss/_mixins.scss" as mixins;
          `,
        },
      },
    },
  },
});
