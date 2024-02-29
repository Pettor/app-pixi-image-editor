import type { Meta, StoryObj } from "@storybook/react";
import { PwaUpdateDialog as Component } from "./PwaUpdateDialog";

const meta = {
  component: Component,
  title: "Library/Pwa",
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const UpdateDialog = {
  args: {
    open: true,
    onUpdate: () => {
      console.log("Refresh");
    },
  },
} satisfies Story;
