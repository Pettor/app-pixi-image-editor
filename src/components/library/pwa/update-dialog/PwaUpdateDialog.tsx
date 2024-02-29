import type { ReactElement } from "react";

export interface PwaUpdateDialogProps {
  open: boolean;
  onUpdate(): void;
}

export function PwaUpdateDialog({ open, onUpdate }: PwaUpdateDialogProps): ReactElement {
  return (
    <>
      {open && (
        <div className="toast toast-bottom toast-center">
          <div className="alert alert-info">
            <div className="flex rounded-md">
              <div className="flex flex-1 flex-row gap-4 items-center">
                <div>A new version is available</div>
                <button className="btn btn-accent" onClick={onUpdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
