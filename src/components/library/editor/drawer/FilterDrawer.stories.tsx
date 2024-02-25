import type { Meta, StoryObj } from "@storybook/react";
import { FilterDrawer as Component } from "./FilterDrawer";
import type { FilterDrawerProps as ComponentProps } from "./FilterDrawer";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  title: "Library/Image Editor/Drawer",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  open: true,
  onClose: () => console.log("onClose"),
  blur: 40,
  onBlurChange: () => console.log("onBlurChange"),
} satisfies ComponentProps;

export const Filter = {
  args: commonProps,
  decorators: [FullSizeDecorator],
} satisfies Story;
