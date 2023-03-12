import { useId, useState } from "react";
import { motion } from "framer-motion";
import {
  handleChange,
  handleClearInput,
  handleShowPass,
} from "../../../utilities/auth/loginFunctions";

const LoginForm = ({ handleSubmit, submitForm, register }) => {
  const { emailId, passwordId } = useId();
  const [showPass, setShowPass] = useState(false);

  return (
    <form
      className="w-full min-h-max mt-8 flex flex-col gap-4 justify-center items-center"
      onSubmit={handleSubmit(submitForm)}
      onChange={handleChange}
    >
      <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={emailId}
          className="sm:pl-6 flex items-center gap-2 font-semibold text-gray-700 text-sm"
        >
          <i className="fa-solid fa-envelope"></i>
          Email: *
        </label>
        <div className="flex">
          <input
            id={emailId}
            type="email"
            placeholder="Email"
            className="w-full sm:w-5/6 email lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-semibold placeholder:font-medium text-gray-500"
            {...register("email")}
            required
          />
          <button
            className="hidden w-max button-email text-2xl absolute right-14 sm:right-16 md:right-20 lg:right-96 text-gray-500 transition-all duration-150 hover:text-gray-600"
            onClick={handleClearInput}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div className="w-full min-h-max flex mx-auto flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={passwordId}
          className="sm:pl-6 flex items-center gap-2 font-semibold text-gray-700 text-sm"
        >
          <i className="fa-solid fa-key"></i>
          Password: *
        </label>
        <div className="flex justify-center items-center">
          <input
            id={passwordId}
            type="password"
            placeholder="Password"
            className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto password bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50
            text-md font-medium text-gray-500 placeholder:font-medium"
            {...register("password")}
            required
          />
          <button
            className="hidden button-pass w-max text-gray-500 text-xl absolute right-14 sm:right-16 md:right-20 lg:right-96 transition-all duration-150 hover:text-gray-600"
            onClick={() => handleShowPass(showPass, setShowPass)}
          >
            {showPass ? (
              <i className="fa-solid fa-eye"></i>
            ) : (
              <i className="fa-solid fa-eye-slash"></i>
            )}
          </button>
        </div>
      </div>
      <div className="w-full min-h-max flex justify-between">
        <button className="text-sm pl-2 sm:pl-8 lg:text-xs font-light text-gray-400 transition-colors duration-200 hover:text-gray-500 self-start flex items-center gap-1">
          Forgot Password
          <i className="fa-solid fa-unlock"></i>
        </button>
      </div>
      <motion.button
        className="w-2/5 h-10 flex justify-center items-center gap-2 self-end mt-6 rounded drop-shadow-lg text-gray-50 bg-blue-600 transition-all duration-100 hover:bg-blue-700"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.4,
          delay: 1.3,
          ease: "easeInOut",
        }}
      >
        Login
        <i className="fa-solid fa-arrow-right-long "></i>
      </motion.button>
      <div className="w-full h-min-max hidden mt-2 mb-14 py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-300">Or login with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </form>
  );
};

export default LoginForm;
