import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundView as Component } from "./NotFoundView";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";
import { MockBrowserDecorator } from "~/stories/decorators/MockBrowserDecorator";
import { MockPhoneDecorator } from "~/stories/decorators/MockPhoneDecorator";
import { MockWindowDecorator } from "~/stories/decorators/MockWindowDecorator";

const meta = {
  component: Component,
  title: "Views/Not Found",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Fullscreen = {
  decorators: [FullSizeDecorator],
} satisfies Story;

export const MockBrowser = {
  decorators: [MockBrowserDecorator],
};

export const MockPhone = {
  decorators: [MockPhoneDecorator],
} satisfies Story;

export const MockWindow = {
  decorators: [MockWindowDecorator],
} satisfies Story;
