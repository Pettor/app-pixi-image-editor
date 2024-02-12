import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/assets/styling/main.css";

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-theme",
  }),
];

export const parameters = {
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Library", "Design System"],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

const preview = {
  parameters: {
    layout: "fullscreen",
  },
};

export default preview;
