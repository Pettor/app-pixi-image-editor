import type { ReactElement } from "react";
import { PwaOfflineDialog } from "./offline-dialog/PwaOfflineDialog";
import { PwaUpdateDialog } from "./update-dialog/PwaUpdateDialog";
import { usePwaProvider } from "./UsePwaProvider";

interface Props {
  children: ReactElement;
}

export function PwaProvider({ children }: Props): ReactElement {
  const { needRefresh, offlineReady, handleOfflineClose, handleRefresh } = usePwaProvider();

  return (
    <>
      <PwaUpdateDialog open={needRefresh} onUpdate={handleRefresh} />
      <PwaOfflineDialog open={offlineReady} onClose={handleOfflineClose} />
      {children}
    </>
  );
}
