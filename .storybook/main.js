const config = {
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
    "@storybook/addon-viewport",
  ],
  core: {
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: ".storybook/vite.config.ts",
      },
    },
  },
  docs: {
    defaultName: "Docs",
  },
  framework: "@storybook/react-vite",
  features: {
    storyStoreV7: true,
  },
  stories: [
    "../src/**/*.stories.@(ts|tsx)",
  ],
};

export default config;
