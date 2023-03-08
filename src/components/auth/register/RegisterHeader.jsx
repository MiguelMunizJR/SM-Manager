import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const RegisterHeader = () => {
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
        to="/auth/login"
        className="px-4 py-2 mt- text-blue-600 text-sm md:text-base border-2 border-blue-600 transition-all duration-100 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 rounded-lg cursor-pointer drop-shadow-md sm:drop-shadow-lg sm:px-6"
      >
        Login
      </NavLink>
    </motion.header>
  );
};

export default RegisterHeader;
