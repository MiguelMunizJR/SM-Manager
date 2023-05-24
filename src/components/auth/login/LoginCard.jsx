import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LoginForm from "./LoginForm";

const LoginCard = ({ handleSubmit, submitForm, register }) => {
  return (
    <article className="w-full sm:max-w-sm min-h-max px-4 pt-28 sm:py-4 font-default flex flex-col bg-gray-50 sm:mt-12 sm:mb-10 sm:items-center sm:shadow-lg sm:rounded-lg">
      <div className="w-full min-h-max sm:py-6 sm:px-6 flex flex-col">
        <motion.div
          className="min-w-full flex flex-row-reverse"
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.3,
            delay: 1.1,
            ease: "easeInOut",
          }}
        >
          <div className="w-full min-h-max flex flex-col">
            <h4 className="text-xs text-blue-500 font-semibold">
              Welcome back
            </h4>
            <h2 className="mt-2 text-gray-800 font-medium text-4xl lg:text-3xl">
              Login
            </h2>
            <h4 className="mt-2 text-sm font-medium text-gray-400">
              Please sign in to continue
            </h4>
          </div>
          <div className="w-1/4 min-h-max hidden justify-center items-center sm:flex">
            <i className="fa-solid fa-user text-4xl text-gray-800"></i>
          </div>
        </motion.div>
        <motion.article
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.2,
            ease: "easeInOut",
          }}
        >
          <LoginForm
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            register={register}
          />
        </motion.article>
        <div className="w-full min-h-max flex justify-center mt-4">
          <motion.h5
            className="mx-auto mt-2 text-sm font-normal text-gray-400"
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.4,
              ease: "easeInOut",
            }}
          >
            don&apos;t have an account?
            <NavLink
              to="/auth/register"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
            >
              {" "}
              Sign up
            </NavLink>
          </motion.h5>
        </div>
      </div>
    </article>
  );
};

export default LoginCard;
