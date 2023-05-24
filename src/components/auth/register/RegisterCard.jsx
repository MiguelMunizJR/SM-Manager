import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const RegisterCard = ({ handleSubmit, submitForm, register }) => {
  return (
    <article className="w-full sm:max-w-sm min-h-max pt-28 sm:pt-8 sm:pb-4 px-4 font-default flex flex-col bg-gray-50 sm:items-center sm:mt-12 sm:mb-10 sm:shadow-lg sm:rounded-lg">
      <div className="w-full min-h-max px-4 flex flex-col">
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
            <h4 className="text-xs text-blue-500 font-semibold">Welcome</h4>
            <h2 className="mt-2 text-gray-800 font-medium text-4xl lg:text-3xl">
              Sign up
            </h2>
            <h4 className="mt-2 text-sm font-medium text-gray-400">
              Please sign up to continue
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
          <RegisterForm
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
            Already have an account?
            <NavLink
              to="/auth/login"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
            >
              {" "}
              Login
            </NavLink>
          </motion.h5>
        </div>
      </div>
    </article>
  );
};

export default RegisterCard;
