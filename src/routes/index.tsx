import { LoadingPage } from "@pages/Loading/LoadingPage";
import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PermissionRoute from "./PermissionRoute";

type RouteType = {
  id: string;
  path?: string;
  component: React.ElementType;
  isRequired?: boolean;
};

function renderRoute(route: RouteType) {
  const { component: Component } = route;

  return (
    <Route
      key={route.id}
      path={route.path}
      element={
        <PermissionRoute route={route}>
          <Component />
        </PermissionRoute>
      }
    />
  );
}

export function renderRoutes(routes: RouteType[] = []) {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {routes.map((route) => {
          return renderRoute(route);
        })}
        <Route
          path="*"
          element={
            <Navigate
              to={{
                pathname: "/my-cv",
              }}
            />
          }
        />
      </Routes>
    </Suspense>
  );
}
