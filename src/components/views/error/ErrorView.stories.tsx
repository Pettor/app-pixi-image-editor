import type { Meta, StoryObj } from "@storybook/react";
import { ErrorView as Component } from "./ErrorView";
import type { ErrorViewProps as ComponentProps } from "./ErrorView";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";
import { MockBrowserDecorator } from "~/stories/decorators/MockBrowserDecorator";
import { MockPhoneDecorator } from "~/stories/decorators/MockPhoneDecorator";
import { MockWindowDecorator } from "~/stories/decorators/MockWindowDecorator";

const meta = {
  component: Component,
  title: "Views/Error",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  onHome: () => console.log("onHome"),
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
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;

export const MockWindow = {
  args: commonProps,
  decorators: [MockWindowDecorator],
} satisfies Story;
