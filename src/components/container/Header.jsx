import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LoginButtons from "../auth/LoginButtons";
import UserMenu from "../navbar/UserMenu";
import NavBar from "../navbar/NavBar";
import { Menu } from "@headlessui/react";

const Header = ({
  showSideBar,
  setShowSideBar,
  activePage,
  userSession,
  setIsLoading,
}) => {
  const handleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      <motion.section
        className={"bg-gray-50 z-40 fixed left-0 inset-y-auto hidden lg:flex"}
        initial={{ translateX: -175 }}
        animate={{ translateX: 175 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <NavBar activePage={activePage} userSession={userSession} />
      </motion.section>
      {/* Sidebar Animation */}
      {showSideBar && (
        <motion.section
          className={"fixed inset-0 z-30"}
          initial={{ translateX: -175 }}
          animate={{ translateX: 175 }}
          transition={{ duration: 0.3 }}
        >
          <NavBar activePage={activePage} userSession={userSession} />
        </motion.section>
      )}
      {showSideBar && (
        <motion.section
          className={"fixed inset-0 z-20"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          onClick={() => setShowSideBar(false)}
        >
          <section className="w-screen h-screen opacity-20 absolute inset-0 bg-gray-600 z-10"></section>
        </motion.section>
      )}
      {/* Header */}
      <motion.header
        className="w-full h-14 px-4 md:px-6 flex justify-between drop-shadow-sm items-center bg-gray-50 z-50 fixed top-0 left-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.8,
        }}
      >
        <section className="w-full flex gap-4 items-center text-gray-800">
          {userSession && (
            <button className="flex lg:hidden" onClick={handleSidebar}>
              <i className="fa-solid fa-bars text-lg"></i>
            </button>
          )}
          <NavLink
            to="/"
            onClick={() => !activePage === "/" && setIsLoading(true)}
          >
            <h1 className="py-2 font-default text-xl md:text-xl font-semibold drop-shadow-sm">
              <span className="py-1 px-2 rounded-md bg-blue-700 text-gray-50 font-bold drop-shadow-md">
                SM
              </span>{" "}
              Manager
            </h1>
          </NavLink>
        </section>
        {userSession ? (
          <UserMenu userSession={userSession} />
        ) : activePage === "/" ? (
          <LoginButtons />
        ) : activePage === "/auth/login" ? (
          <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
            <NavLink
              to="/auth/register"
              className="px-2 md:px-6 py-2 transition-all duration-150 text-gray-50 text-sm md:text-base bg-blue-600 hover:bg-blue-700 rounded-md drop-shadow-sm cursor-pointer"
            >
              Sign up
            </NavLink>
          </article>
        ) : activePage === "/auth/register" ? (
          <article className="w-full py-2 flex gap-3 md:gap-5 items-center justify-end font-default">
            <NavLink
              to="/auth/login"
              className="px-2 md:px-6 py-2 transition-all duration-150 text-blue-700 text-sm md:text-base font-medium ring-2 ring-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded-sm drop-shadow-sm cursor-pointer"
            >
              Login
            </NavLink>
          </article>
        ) : null}
      </motion.header>
    </>
  );
};

export default Header;
