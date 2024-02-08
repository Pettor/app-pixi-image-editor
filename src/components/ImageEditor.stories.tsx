import type { Meta, StoryObj } from "@storybook/react";
import type { ImageEditorProps as ComponentProps } from "./ImageEditor";
import { ImageEditor as Component } from "./ImageEditor";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { CommonDecorator } from "~/stories/decorators/CommonDecorator";

const meta = {
  component: Component,
  title: "Library/Image Editor",
  tags: ["autodocs"],
  decorators: [CommonDecorator],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  url: cardImgUrl,
} satisfies ComponentProps;

export const WithLabel = {
  args: commonProps,
} satisfies Story;

export const WithWindow = {
  args: commonProps,
  render: (args) => (
    <div className="mockup-window border bg-base-300">
      <div className="flex w-full justify-center p-8">
        <Component {...args} />
      </div>
    </div>
  ),
} satisfies Story;
