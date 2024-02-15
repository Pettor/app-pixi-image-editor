/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { ReactElement } from "react";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Outlet } from "react-router-dom";
import { GlobalRoutes } from "./GlobalRoutes";

export function AppRoutes(): ReactElement {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Outlet />}>
            <Route>
              {GlobalRoutes().map((route) => (
                <Route key={route.path} {...route} />
              ))}
            </Route>
            <Route path="*" lazy={() => import("~/pages/not-found/NotFoundRoute")} />
          </Route>
        )
      )}
    />
  );
}
