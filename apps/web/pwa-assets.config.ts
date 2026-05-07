import { defineConfig } from "@vite-pwa/assets-generator/config";

export default defineConfig({
  preset: {
    transparent: {
      sizes: [192, 512],
      favicons: [
        [16, "favicon-16x16.png"],
        [32, "favicon-32x32.png"],
        [48, "favicon.ico"],
        [180, "apple-touch-icon.png"],
      ],
    },
    maskable: {
      sizes: [],
    },
    apple: {
      sizes: [],
    },
  },
  images: ["src/assets/logo/template-512x512.svg"],
});
