import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitch as Component } from "./ThemeSwitch";
import type { ThemeSwitchProps as ComponentProps } from "./ThemeSwitch";

const meta = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Library/Theme",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  mode: "light",
  onSwitch: () => console.log("Switched"),
} satisfies ComponentProps;

export const Switch = {
  args: commonProps,
} satisfies Story;
