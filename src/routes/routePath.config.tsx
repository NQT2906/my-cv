import { lazy } from "react";

export const publicRoutes = [
  {
    id: "home",
    path: "/",
    component: lazy(() => import("../pages/Home/HomePage")),
  },
  {
    id: "sub-home",
    path: "/my-cv",
    component: lazy(() => import("../pages/Home/HomePage")),
  },
  {
    id: "test",
    path: "/test",
    component: lazy(() => import("../pages/Test/TestPage")),
  },
];
