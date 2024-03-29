import type { Meta, StoryObj } from "@storybook/react";
import { EditorView as Component } from "./EditorView";
import type { EditorViewProps as ComponentProps } from "./EditorView";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";
import { MockBrowserDecorator } from "~/stories/decorators/MockBrowserDecorator";
import { MockPhoneDecorator } from "~/stories/decorators/MockPhoneDecorator";
import { MockWindowDecorator } from "~/stories/decorators/MockWindowDecorator";

const meta = {
  component: Component,
  title: "Views/Editor",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  url: cardImgUrl,
  appdrawerProps: {
    themeSwitchProps: {
      mode: "light",
      onSwitch: () => console.log("Switched"),
    },
    onNewImage: () => console.log("onNewImage"),
    onSaveImage: () => console.log("onSaveImage"),
  },
  ErrorComponent: () => <div>Error</div>,
  LoaderComponent: () => <div>Loading</div>,
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
