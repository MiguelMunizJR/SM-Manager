import { NavLink } from "react-router-dom";

const authButtons = () => {
  return (
    <article className="min-w-max flex gap-4 md:gap-5 md:pr-4 items-center font-default">
      <NavLink
        to="/auth/login"
        className="px-2 md:px-4 py-1 transition-all duration-200 text-blue-700 text-sm md:text-base font-normal ring-2 ring-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded drop-shadow-sm cursor-pointer"
      >
        Login
      </NavLink>
      <NavLink
        to="/auth/register"
        className="px-2 md:px-4 py-1 transition-all duration-200 text-gray-50 ring-2
        ring-blue-600 text-sm md:text-base bg-blue-600 hover:bg-blue-700 hover:ring-blue-700 rounded drop-shadow-sm cursor-pointer"
      >
        Sign up
      </NavLink>
    </article>
  );
};

export default authButtons;
