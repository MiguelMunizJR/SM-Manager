import { NavLink } from "react-router-dom";

const LoginButtons = () => {
  return (
    <article className="w-full py-2 flex gap-3 items-center justify-end font-default">
      <NavLink to="/auth/login" className="px-2 py-2 text-blue-600 text-sm font-medium ring-2 ring-blue-500 rounded-sm drop-shadow-sm cursor-pointer">
        Login
      </NavLink>
      <NavLink to="/auth/register" className="px-2 py-2 text-gray-50 text-sm bg-blue-500 rounded-md drop-shadow-sm cursor-pointer">
        Sign up
      </NavLink>
    </article>
  );
};

export default LoginButtons;
