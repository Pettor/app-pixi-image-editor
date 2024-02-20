import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 5183,
      open: true,
      hmr: {
        overlay: false,
      },
    },
  };
});
