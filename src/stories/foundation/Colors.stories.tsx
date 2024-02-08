import type { ReactElement } from "react";
import { DocumentationDecorator } from "../decorators/DocumentationDecorator";
import { DocumentationLayout } from "../layout/DocumentationLayout";

export default {
  title: "Design System/Colors",
  decorators: [DocumentationDecorator],
  parameters: {
    layout: "fullscreen",
  },
};

export function Colors(): ReactElement {
  return (
    <DocumentationLayout label="Colors">
      <div className="flex flex-col">
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl font-bold">Name</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center p-6 text-xl font-bold"}>Main</div>
            <div className={"flex basis-1/3 items-center p-6 text-xl font-bold"}>Content</div>
            <div className={"flex basis-1/3 items-center p-6 text-xl font-bold"}>Focus</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Primary</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-primary p-6"} />
            <div className={"flex basis-1/3 items-center bg-primary-content p-6"} />
            <div className={"bg-primary-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Secondary</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-secondary p-6"} />
            <div className={"flex basis-1/3 items-center bg-secondary-content p-6"} />
            <div className={"bg-secondary-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Accent</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-accent p-6"} />
            <div className={"flex basis-1/3 items-center bg-accent-content p-6"} />
            <div className={"bg-accent-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Neutral</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-neutral p-6"} />
            <div className={"flex basis-1/3 items-center bg-neutral-content p-6"} />
            <div className={"bg-neutral-focus flex basis-1/3 items-center p-6"} />
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Base</div>
          <div className="flex flex-1 flex-row">
            <div className="flex flex-1 flex-row">
              <div className={"flex basis-1/3 items-center bg-base-100 p-6"} />
              <div className={"flex basis-1/3 items-center bg-base-200 p-6"} />
              <div className={"flex basis-1/3 items-center bg-base-300 p-6"} />
            </div>
            <div className={"flex basis-1/3 items-center bg-base-content p-6"} />
            <div className={"flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Info</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-info p-6"} />
            <div className={"flex basis-1/3 items-center bg-info-content p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Success</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-success p-6"} />
            <div className={"flex basis-1/3 items-center bg-success-content p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Warning</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-warning p-6"} />
            <div className={"flex basis-1/3 items-center bg-warning-content p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
        <div className="m-2 flex flex-1">
          <div className="flex basis-1/4 items-center text-xl">Error</div>
          <div className="flex flex-1 flex-row">
            <div className={"flex basis-1/3 items-center bg-error p-6"} />
            <div className={"flex basis-1/3 items-center bg-error-content p-6"} />
            <div className={"alignt-center flex basis-1/3 justify-center"}>N/A</div>
          </div>
        </div>
      </div>
    </DocumentationLayout>
  );
}
