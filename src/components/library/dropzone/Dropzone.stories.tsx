import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone as Component } from "./Dropzone";
import type { DropzoneProps as ComponentProps } from "./Dropzone";

const meta = {
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Library/Dropzone",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  onDrop: (acceptedFiles: File[]) => console.log(acceptedFiles),
} satisfies ComponentProps;

export const Standard = {
  args: commonProps,
} satisfies Story;
