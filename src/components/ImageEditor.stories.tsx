import type { Meta, StoryObj } from "@storybook/react";
import type { ImageEditorProps as ComponentProps } from "./ImageEditor";
import { ImageEditor as Component } from "./ImageEditor";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  decorators: [FullSizeDecorator],
  parameters: {
    layout: "fullscreen",
  },
  title: "Library/Image Editor",
  tags: ["autodocs"],
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
    <div className="mockup-window m-8 flex flex-1 border bg-base-300">
      <div className="flex h-full w-full justify-center">
        <Component {...args} />
      </div>
    </div>
  ),
} satisfies Story;
