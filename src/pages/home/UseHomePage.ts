import { useSetAtom } from "jotai";
import { droppedFileAtom } from "~/core/routes/atoms/DroppedFileAtoms";

export function useHomePage(): {
  setDroppedFile: (file: File) => void;
} {
  const setDroppedFile = useSetAtom(droppedFileAtom);

  return {
    setDroppedFile,
  };
}
