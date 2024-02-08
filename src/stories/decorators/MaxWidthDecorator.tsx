import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export default function MaxWidthDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="max-w-xs">
      <Story />
    </div>
  );
}
