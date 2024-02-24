import type { RouteProps } from "react-router-dom";

// Routes that are accessible to everyone
export function GlobalRoutes(): RouteProps[] {
  return [
    {
      path: "/",
      lazy: () => import("~/pages/home/HomeRoute"),
    },
    {
      path: "/editor",
      lazy: () => import("~/pages/editor/ImageEditorRoute"),
    },
  ];
}
