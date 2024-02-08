/* eslint-disable */
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  features: {
    storyStoreV7: true,
  },
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-viewport",
  ],
  docs: {
    defaultName: "Docs",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
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
    });
  },
};

export default config;
