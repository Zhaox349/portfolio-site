// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      viewport:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
      script: [
        {
          src: "/publication/american-chinese/js/jquery.min.1.7.js",
        },
        {
          src: "/publication/american-chinese/js/modernizr.2.5.3.min.js",
        },
        {
          src: "/publication/american-chinese/js/jquery-ui-1.8.20.custom.min.js",
        },
        {
          src: "/publication/american-chinese/js/jquery.mousewheel.min.js",
        },
        {
          src: "/publication/american-chinese/js/turn.min.js",
        },
        {
          src: "/publication/american-chinese/js/zoom.min.js",
        },
        {
          src: "/publication/american-chinese/js/steve-jobs.js",
        },
        {
          src: "/publication/american-chinese/js/1.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "/publication/american-chinese/css/normalize.min.css",
        },
        {
          rel: "stylesheet",
          href: "/publication/american-chinese/css/1.css",
        },
        {
          rel: "stylesheet",
          href: "/publication/american-chinese/css/common.css",
        },
        {
          rel: "stylesheet",
          href: "/publication/american-chinese/css/jquery.ui.css",
        },
        {
          rel: "stylesheet",
          href: "/publication/american-chinese/css/steve-jobs.css",
        },
      ],
    },
  },

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

    build: {
      // 移动端性能优化
      cssMinify: "lightningcss",
      minify: "terser",
      ssrManifest: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router"],
          },
        },
      },
    },
  },

  // 移动端性能优化
  nitro: {
    minify: true,
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
    prerender: {
      concurrency: 12,
    },
  },

  experimental: {
    // 启用移动端手势优化
    viewTransition: true,
    renderJsonPayloads: true,
  },

  webpack: {
    extractCSS: true,
  },
});
