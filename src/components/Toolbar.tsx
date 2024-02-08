import type { ReactElement } from "react";

export function Toolbar(): ReactElement {
  return (
    <div className="flex justify-center">
      <button className="btn">Zoom In</button>
      <button className="btn">Zoom Out</button>
    </div>
  );
}
