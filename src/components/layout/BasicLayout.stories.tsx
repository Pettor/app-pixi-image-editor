import type { Meta, StoryObj } from "@storybook/react";
import { BasicLayout as Component } from "./BasicLayout";

const meta = {
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  title: "Layout/Basic",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: <div>Some Content</div>,
  },
} satisfies Story;
