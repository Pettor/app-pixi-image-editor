import type { Meta, StoryObj } from "@storybook/react";
import { HomeView as Component } from "./HomeView";
import type { HomeViewProps as ComponentProps } from "./HomeView";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";
import { MockBrowserDecorator } from "~/stories/decorators/MockBrowserDecorator";
import { MockPhoneDecorator } from "~/stories/decorators/MockPhoneDecorator";
import { MockWindowDecorator } from "~/stories/decorators/MockWindowDecorator";

const meta = {
  component: Component,
  title: "Views/Home",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  socialLinkProps: {
    onGithubClick: () => console.log("Github"),
    onLinkedInClick: () => console.log("Linkedin"),
  },
  themeSwitchProps: {
    mode: "light",
    onSwitch: () => console.log("Switched"),
  },
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
  parameters: { viewport: { defaultViewport: "iphonex" } },
} satisfies Story;

export const MockWindow = {
  args: commonProps,
  decorators: [MockWindowDecorator],
} satisfies Story;
