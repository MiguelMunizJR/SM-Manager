import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const LoginHeader = () => {
  return (
    <motion.header
      className="w-full h-14 py-6 px-2 flex justify-between items-center transition-colors duration-150 bg-gray-50 z-40 fixed top-0 left-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: 1,
      }}
    >
      <NavLink to="/">
        <h1 className="py-2 font-default text-xl md:text-xl font-semibold drop-shadow-sm">
          <span className="py-1 px-2 rounded-md bg-blue-700 text-gray-50 font-bold drop-shadow-md">
            SM
          </span>{" "}
          Manager
        </h1>
      </NavLink>
      <NavLink
        to="/auth/register"
        className="px-4 py-2 mt- text-gray-50 text-sm md:text-base bg-blue-600 transition-all duration-100 hover:bg-blue-700 rounded-md cursor-pointer drop-shadow-md sm:drop-shadow-lg sm:px-6"
      >
        Sign up
      </NavLink>
    </motion.header>
  );
};

export default LoginHeader;
