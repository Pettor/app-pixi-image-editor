import type { Meta, StoryObj } from "@storybook/react";
import { AppDrawer as Component } from "./AppDrawer";
import type { AppDrawerProps as ComponentProps } from "./AppDrawer";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  title: "Library/Editor/Drawer",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  open: true,
  themeSwitchProps: {
    mode: "light",
    onSwitch: () => console.log("Switched"),
  },
  onClose: () => {},
  onNewImage: () => {},
} satisfies ComponentProps;

export const App = {
  args: commonProps,
  decorators: [FullSizeDecorator],
} satisfies Story;
