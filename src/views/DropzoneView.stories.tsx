import type { Meta, StoryObj } from "@storybook/react";
import { DropzoneView as Component } from "./DropzoneView";
import type { DropzoneViewProps as ComponentProps } from "./DropzoneView";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";
import { MockBrowserDecorator } from "~/stories/decorators/MockBrowserDecorator";
import { MockPhoneDecorator } from "~/stories/decorators/MockPhoneDecorator";
import { MockWindowDecorator } from "~/stories/decorators/MockWindowDecorator";

const meta = {
  component: Component,
  title: "Views/Dropzone",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  onDrop: () => console.log("Dropped"),
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
