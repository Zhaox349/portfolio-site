import { createApp } from "vue";

export default defineNuxtPlugin((nuxtApp) => {
  let fullscreenComponent: unknown = null;

  const initFullscreenComponent = async () => {
    if (!fullscreenComponent) {
      const FullscreenImage = await import(
        "~/components/Project/FullscreenImage/index.vue"
      );
      const container = document.createElement("div");
      document.body.appendChild(container);
      const app = createApp(FullscreenImage.default); // 注意 default
      const instance = app.mount(container);
      fullscreenComponent = instance;
    }
    return fullscreenComponent;
  };

  nuxtApp.vueApp.directive("fullscreen-image", {
    mounted(el: HTMLElement) {
      if (el.tagName === "IMG" && el.classList) {
        const className = el.classList[0];
        if (
          className &&
          (className.includes("page-") || className.includes("-arrow"))
        ) {
          return;
        }
      }

      el.addEventListener("click", async () => {
        if (el instanceof HTMLImageElement) {
          const component = await initFullscreenComponent();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (component as any).enterFullscreen?.(el.src, el.alt);
        }
      });
    },
  });
});
