import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { withThemeByClassName } from "@storybook/addon-themes";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../src/assets/styling/main.css";

export const decorators = [
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
  layout: "fullscreen",
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Library", "Layout", "Views", "Design System"],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
