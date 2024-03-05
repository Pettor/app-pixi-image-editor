import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    plugins: [
      react(),
      tsconfigPaths(),
      VitePWA({
        devOptions: {
          enabled: false,
        },
        includeAssets: [
          "favicon.ico",
          "apple-touch-icon.png",
          "pwa-192x192.png",
          "pwa-512x512.png",
          "screenshot-mobile.png",
          "screenshot-desktop.png",
        ],
        injectRegister: "auto",
        manifest: {
          background_color: "#ffffff",
          display: "standalone",
          description:
            "React web application using PixiJS to create a basic image editor. The editor can load an image and contains several different tools and mechanics to view and adjust the content.",
          name: "Pixi Image Editor",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
          screenshots: [
            {
              src: "screenshot-desktop.png",
              sizes: "1411x1170",
              type: "image/png",
              form_factor: "wide",
              label: "Pixi Image Editor",
            },
            {
              src: "screenshot-mobile.png",
              sizes: "390x673",
              type: "image/png",
              form_factor: "narrow",
              label: "Pixi Image Editor",
            },
          ],
          short_name: "Pixi Editor",
          theme_color: "#ffffff",
        },
        registerType: "prompt",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        },
      }),
    ],
    server: {
      port: 5183,
      open: true,
      hmr: {
        overlay: false,
      },
    },
  };
});
