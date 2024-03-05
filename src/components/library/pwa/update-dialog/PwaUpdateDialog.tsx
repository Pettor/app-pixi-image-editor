import type { ReactElement } from "react";

export interface PwaUpdateDialogProps {
  open: boolean;
  onUpdate(): void;
}

export function PwaUpdateDialog({ open, onUpdate }: PwaUpdateDialogProps): ReactElement {
  return (
    <>
      {open && (
        <div className="toast toast-center toast-bottom z-20">
          <div className="alert alert-info shadow-lg">
            <div className="flex flex-1 flex-row items-center gap-4">
              <span>A new version is available</span>
              <button className="btn btn-accent" onClick={onUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
