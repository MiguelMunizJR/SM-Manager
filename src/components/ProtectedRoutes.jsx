import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // const isLogged = localStorage.getItem("token");

  // if (isLogged) {
    return <Outlet />;
  // } else {
    // alert("You need to login first");
    // return <Navigate to="/login" />;
  // }
};

export default ProtectedRoutes;