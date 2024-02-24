import type { ReactElement } from "react";
import { useHomePage } from "./UseHomePage";
import { HomeView } from "~/components/views/home/HomeView";

export function HomePage(): ReactElement {
  const homeViewProps = useHomePage();

  return <HomeView {...homeViewProps} />;
}
