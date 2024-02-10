import type { ReactElement } from "react";

export function Toolbar(): ReactElement {
  return (
    <div className="my-4 flex justify-center gap-4">
      <button className="btn">Zoom In</button>
      <button className="btn">Zoom Out</button>
    </div>
  );
}
