import type { ReactNode } from "react";
import type { WritableAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

export interface HydrateAtomsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  atomValues: Iterable<readonly [WritableAtom<unknown, [any], unknown>, unknown]>;
  children: ReactNode;
}

export function HydrateAtoms({ atomValues, children }: HydrateAtomsProps): ReactNode {
  // initialising on state with prop on render here
  useHydrateAtoms(new Map(atomValues));
  return children;
}
