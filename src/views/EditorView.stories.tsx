import type { Meta, StoryObj } from "@storybook/react";
import { EditorView as Component } from "./EditorView";
import type { EditorViewProps as ComponentProps } from "./EditorView";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  decorators: [FullSizeDecorator],
  parameters: {
    layout: "fullscreen",
  },
  title: "Views/Dropzone",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  imageUrl: cardImgUrl,
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
