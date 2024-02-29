import type { ReactElement } from "react";
import { PwaProvider } from "~/components/library/pwa/PwaProvider";

export interface AppProvidersProps {
  children: ReactElement;
}

export function AppProviders({ children }: AppProvidersProps): ReactElement {
  return <PwaProvider>{children}</PwaProvider>;
}
