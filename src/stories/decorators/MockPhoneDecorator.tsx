import type { ReactElement } from "react";
import type { StoryFn } from "@storybook/react";

export function MockPhoneDecorator(Story: StoryFn): ReactElement {
  return (
    <div className="flex flex-1 justify-center">
      <div className="m-8 item">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1">
              <Story />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
