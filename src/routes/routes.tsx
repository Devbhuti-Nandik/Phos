import Home from "@pages/Home";
import RootApp from "@pages/RootApp";
import { createBrowserRouter } from "react-router";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/root",
    element: <RootApp />,
  },
];

const router = createBrowserRouter(routes);

export default router;
