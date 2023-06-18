function PermissionRoute(props: any) {
  //   const location = useLocation();
  //   if (location.pathname?.toString()?.includes("home")) {
  //     return (
  //       <Navigate
  //         to={{
  //           pathname: "/test",
  //         }}
  //       />
  //     );
  //   }

  return props.children;
}

export default PermissionRoute;
