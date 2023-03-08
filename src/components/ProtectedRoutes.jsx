import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoutes = async () => {
  const isLogged = localStorage?.getItem("token");
  const navigate = useNavigate();

  if (isLogged) {
    return <Outlet />;
  } else {
    navigate("/");
  }
};

export default ProtectedRoutes;