import type { Meta, StoryObj } from "@storybook/react";
import { FilterDrawer as Component } from "./FilterDrawer";
import type { FilterDrawerProps as ComponentProps } from "./FilterDrawer";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  title: "Library/Editor/Drawer",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  open: true,
  blur: 40,
  brightness: 1,
  contrast: 1,
  saturation: 1,
  pixelate: 0,
  red: 0,
  green: 0,
  blue: 0,
  onFilterChange: () => console.log("onFilterChange"),
  onClose: () => console.log("onClose"),
} satisfies ComponentProps;

export const Filter = {
  args: commonProps,
  decorators: [FullSizeDecorator],
} satisfies Story;
