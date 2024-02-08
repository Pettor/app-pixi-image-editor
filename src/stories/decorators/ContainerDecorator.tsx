/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export default function ContainerDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="container">
      <Story />
    </div>
  );
}
