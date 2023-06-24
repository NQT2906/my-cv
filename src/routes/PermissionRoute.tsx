// import { Navigate, useLocation } from "react-router-dom";

function PermissionRoute(props: any) {
  // const location = useLocation();
  // if (location.pathname?.toString() === "/") {
  //   return (
  //     <Navigate
  //       to={{
  //         pathname: "/my-cv",
  //       }}
  //     />
  //   );
  // }

  return props.children;
}

export default PermissionRoute;
