import type { Meta, StoryObj } from "@storybook/react";
import { PwaOfflineDialog as Component } from "./PwaOfflineDialog";

const meta = {
  component: Component,
  title: "Library/Pwa",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const OfflineDialog = {
  args: {
    open: true,
  },
} satisfies Story;
