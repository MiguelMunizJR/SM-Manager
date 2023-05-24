// Dependencies
import { NavLink } from "react-router-dom";
// Components & utils
import LoginButtons from "../auth/authButtons";
import UserMenu from "../navbar/UserMenu";
import { ROUTES_PATH } from "../../consts";

const Header = ({ showSideBar, setShowSideBar, activePage, isLogin }) => {
  const handleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      {/* Side Menu */}
      {showSideBar && (
        <section
          className="w-screen min-h-screen opacity-20 absolute bg-gray-800 z-10"
          onClick={handleSidebar}
        ></section>
      )}
      {/* Header */}
      <section className="w-screen h-14 px-4 md:px-14 lg:px-32 fixed flex items-center justify-between bg-slate-100 text-gray-800">
        <article className="flex items-center gap-3">
          {/* Side Menu Button */}
          {isLogin && (
            <button className="flex md:hidden" onClick={handleSidebar}>
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          )}
          <NavLink to={ROUTES_PATH.HOME}>
            <h1 className="py-2 font-default flex items-center gap-1 text-lg text-gray-900 md:text-xl font-semibold drop-shadow-sm">
              <span className="py-1 px-2 rounded bg-blue-700 text-gray-50 font-bold drop-shadow-md">
                SM
              </span>
              Manager
            </h1>
          </NavLink>
        </article>
        <section className="min-w-max flex items-center gap-14">
          {isLogin && (
            <article className="hidden md:flex gap-8 font-default font-medium text-gray-700">
              <NavLink
                className="flex items-center gap-2"
                to={ROUTES_PATH.CLIENTS}
              >
                <i className="fa-solid fa-users"></i>
                Clients
              </NavLink>
              <NavLink
                className="flex items-center gap-2"
                to={ROUTES_PATH.TASKS}
              >
                <i className="fa-solid fa-list-check"></i>
                Tasks
              </NavLink>
            </article>
          )}
          {isLogin ? (
            <UserMenu />
          ) : activePage === ROUTES_PATH.HOME ? (
            <LoginButtons />
          ) : activePage === ROUTES_PATH.LOGIN ? (
            <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
              <NavLink
                to={ROUTES_PATH.REGISTER}
                className="px-2 md:px-6 py-2 transition-all duration-150 text-gray-50 text-sm md:text-base bg-blue-600 hover:bg-blue-700 rounded-md drop-shadow-sm cursor-pointer"
              >
                Sign up
              </NavLink>
            </article>
          ) : activePage === ROUTES_PATH.REGISTER ? (
            <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
              <NavLink
                to={ROUTES_PATH.LOGIN}
                className="px-2 md:px-6 py-2 transition-all duration-150 text-blue-700 text-sm md:text-base font-medium ring-2 ring-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded-sm drop-shadow-sm cursor-pointer"
              >
                Login
              </NavLink>
            </article>
          ) : null}
        </section>
      </section>
    </>
  );
};

export default Header;
