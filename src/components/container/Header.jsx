// Dependencies
import { NavLink } from "react-router-dom";
// Components & utils
import LoginButtons from "../auth/authButtons";
import { ROUTES_PATH } from "../../consts";
import SideNav from "./SideNav";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = ({ user, activePage, isLogin }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      <motion.aside
        className="fixed z-40"
        initial={{ translateX: "-208px" }}
        animate={{ translateX: showSideNav ? "208px" : "-208px"}}
        transition={{
          duration: .3,
          ease: "easeInOut"
        }}
      >
        {activePage === ROUTES_PATH.LOGIN ||
          (activePage !== ROUTES_PATH.REGISTER && (
            <SideNav user={user} />
          ))}
      </motion.aside>
      {/* Header */}
      <section className="w-screen h-14 px-4 md:px-12 lg:px-8 fixed flex items-center justify-between bg-slate-50 text-gray-800 shadow-sm shadow-slate-100 z-40">
        <article className="flex items-center gap-3">
          {/* Side Menu Button */}
          {isLogin && (
            <button className="flex lg:hidden" onClick={handleSideNav}>
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          )}
          <NavLink to={ROUTES_PATH.HOME}>
            <h1 className="py-2 font-default flex items-center gap-1 text-lg text-gray-800 md:text-xl font-semibold drop-shadow-sm">
              <span className="py-1 px-2 rounded bg-blue-700 text-gray-50 font-bold drop-shadow-md">
                SM
              </span>
              Manager
            </h1>
          </NavLink>
        </article>
        <section className="min-w-max pr-4 md:pr-2 lg:pr-14 flex items-center gap-14">
          {!isLogin && activePage === ROUTES_PATH.HOME ? (
            <LoginButtons />
          ) : activePage === ROUTES_PATH.LOGIN ? (
            <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
              <NavLink
                to={ROUTES_PATH.REGISTER}
                className="px-2 md:px-6 py-1 transition-all duration-200 text-gray-50 ring-2
                ring-blue-600 text-sm md:text-base bg-blue-600 hover:bg-blue-700 hover:ring-blue-700 rounded drop-shadow-sm cursor-pointer"
              >
                Sign up
              </NavLink>
            </article>
          ) : activePage === ROUTES_PATH.REGISTER ? (
            <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
              <NavLink
                to={ROUTES_PATH.LOGIN}
                className="px-2 md:px-6 py-1 transition-all duration-200 text-blue-700 text-sm md:text-base font-normal ring-2 ring-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded drop-shadow-sm cursor-pointer"
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
