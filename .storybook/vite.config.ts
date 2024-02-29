import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    base: "./",
    plugins: [tsconfigPaths()],
    // Add storybook-specific dependencies to pre-optimization
    optimizeDeps: {
      include: [
        "@storybook/addon-a11y",
        "@storybook/addon-interactions",
        "@storybook/addon-themes",
        "@storybook/addon-viewport",
      ],
    },
  };
});
