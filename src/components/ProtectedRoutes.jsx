import { toast } from "sonner";
import { useNavigate, Outlet } from "react-router-dom";
import { ROUTES_PATH } from "../consts";

const ProtectedRoutes = ({ isLogin }) => {
  const navigate = useNavigate();

  if (isLogin) {
    return <Outlet />;
  } else {
    toast("You need to login to continue");
    navigate(ROUTES_PATH.LOGIN);
  }
};

export default ProtectedRoutes;