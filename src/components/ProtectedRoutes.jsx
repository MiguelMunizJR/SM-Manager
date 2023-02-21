import { Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isLogged = localStorage.getItem("token");

  if (isLogged) {
    return <Outlet />;
  }
};

export default ProtectedRoutes;