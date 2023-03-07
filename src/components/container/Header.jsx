import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import LoginButtons from "../../utilities/login/LoginButtons";
import UserMenu from "../../utilities/navbar/UserMenu";
import NavBar from "../navbar/NavBar";

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
          className={"fixed inset-0 z-10"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <section
            onClick={handleSidebar}
            className="w-screen h-screen opacity-10 absolute inset-0 bg-gray-400 z-10"
          ></section>
        </motion.section>
      )}
      {/* Header */}
      <article className="w-full h-14 px-4 flex justify-between items-center bg-gray-50 z-40 fixed top-0 left-0">
        <section className="w-full flex gap-4 items-center text-gray-800">
          {userSession && (
            <button onClick={handleSidebar}>
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
        ) : (
          <LoginButtons />
        )}
      </article>
    </>
  );
};

export default Header;
