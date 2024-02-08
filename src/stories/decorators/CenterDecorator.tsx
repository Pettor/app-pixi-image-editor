import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function CenterDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="flex w-full justify-center">
      <Story />
    </div>
  );
}
