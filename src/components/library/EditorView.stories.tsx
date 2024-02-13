import type { Meta, StoryObj } from "@storybook/react";
import { ImageEditor as Component } from "./Editor";
import type { ImageEditorProps as ComponentProps } from "./Editor";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";
import { MockBrowserDecorator } from "~/stories/decorators/MockBrowserDecorator";
import { MockPhoneDecorator } from "~/stories/decorators/MockPhoneDecorator";
import { MockWindowDecorator } from "~/stories/decorators/MockWindowDecorator";

const meta = {
  component: Component,
  title: "Library/ImageEditor",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  url: cardImgUrl,
} satisfies ComponentProps;

export const Fullscreen = {
  args: commonProps,
  decorators: [FullSizeDecorator],
} satisfies Story;

export const MockBrowser = {
  args: commonProps,
  decorators: [MockBrowserDecorator],
};

export const MockPhone = {
  args: commonProps,
  decorators: [MockPhoneDecorator],
} satisfies Story;

export const MockWindow = {
  args: commonProps,
  decorators: [MockWindowDecorator],
} satisfies Story;
