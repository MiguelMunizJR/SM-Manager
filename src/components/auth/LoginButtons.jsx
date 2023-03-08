import { NavLink } from "react-router-dom";

const LoginButtons = () => {
  return (
    <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
      <NavLink
        to="/auth/login"
        className="px-2 md:px-6 py-2 transition-all duration-150 text-blue-700 text-sm md:text-base font-medium ring-2 ring-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded-sm drop-shadow-sm cursor-pointer"
      >
        Login
      </NavLink>
      <NavLink
        to="/auth/register"
        className="px-2 md:px-6 py-2 transition-all duration-150 text-gray-50 text-sm md:text-base bg-blue-600 hover:bg-blue-700 rounded-md drop-shadow-sm cursor-pointer"
      >
        Sign up
      </NavLink>
    </article>
  );
};

export default LoginButtons;
