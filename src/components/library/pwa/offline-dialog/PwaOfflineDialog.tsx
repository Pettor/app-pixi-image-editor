import type { ReactElement } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export interface PwaOfflineDialogProps {
  open: boolean;
  onClose(): void;
}

export function PwaOfflineDialog({ open, onClose }: PwaOfflineDialogProps): ReactElement {
  return (
    <>
      {open && (
        <div className="toast z-50">
          <div className="alert alert-info shadow-lg">
            <span>Ready to work offline</span>
            <button className="btn btn-square btn-ghost btn-sm" onClick={onClose}>
              <XMarkIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
