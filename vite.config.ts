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
        includeAssets: ["favicon.ico", "apple-touch-icon.png"],
        injectRegister: "auto",
        manifest: {
          name: "Pixi Image Editor",
          short_name: "PixiImageEditor",
          description:
            "React web application using PixiJS to create a basic image editor. The editor can load an image and contains several different tools and mechanics to view and adjust the content.",
          theme_color: "#ffffff",
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
