import type { Meta, StoryObj } from "@storybook/react";
import type { ImageEditorProps as ComponentProps } from "./Editor";
import { ImageEditor as Component } from "./Editor";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  decorators: [FullSizeDecorator],
  parameters: {
    layout: "fullscreen",
  },
  title: "Library/Image Editor",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  url: cardImgUrl,
} satisfies ComponentProps;

export const Fullscreen = {
  args: commonProps,
} satisfies Story;

export const MockWindow = {
  args: commonProps,
  render: (args) => (
    <div className="mockup-window m-8 flex flex-1 border bg-base-300">
      <div className="flex h-full w-full justify-center p-8">
        <Component {...args} />
      </div>
    </div>
  ),
} satisfies Story;

export const MockMobile = {
  args: commonProps,
  render: (args) => (
    <div className="mockup-phone m-8 flex flex-1 border bg-base-300">
      <div className="flex h-full w-full justify-center p-8">
        <Component {...args} />
      </div>
    </div>
  ),
} satisfies Story;
