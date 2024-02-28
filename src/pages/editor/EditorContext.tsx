import type { ReactElement } from "react";
import { Provider } from "jotai";

export interface EditorContextProps {
  children: ReactElement;
}

export function EditorContext({ children }: EditorContextProps): ReactElement {
  return <Provider>{children}</Provider>;
}
