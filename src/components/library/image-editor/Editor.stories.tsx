import type { Meta, StoryObj } from "@storybook/react";
import { ImageEditor as Component } from "./Editor";
import type { ImageEditorProps as ComponentProps } from "./Editor";
import cardImgUrl from "~/assets/images/card-image.jpg";
import { FullSizeDecorator } from "~/stories/decorators/FullSizeDecorator";

const meta = {
  component: Component,
  tags: ["autodocs"],
  title: "Library/Image Editor",
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const commonProps = {
  url: cardImgUrl,
  appdrawerProps: {
    onNewImage: () => {},
  },
  ErrorComponent: () => <div>Error</div>,
  LoaderComponent: () => <div>Loading</div>,
} satisfies ComponentProps;

export const Standard = {
  args: commonProps,
  decorators: [FullSizeDecorator],
} satisfies Story;
