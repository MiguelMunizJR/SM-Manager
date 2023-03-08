import { useId } from "react";
import { motion } from "framer-motion";

const LoginForm = ({ handleSubmit, submitForm, register }) => {
  const { emailId, passwordId } = useId();

  return (
    <form
      className="w-full min-h-max mt-8 flex flex-col gap-4 justify-center items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={emailId}
          className="sm:pl-6 font-semibold text-gray-900 text-sm"
        >
          Email: *
        </label>
        <input
          id={emailId}
          type="email"
          placeholder="Email"
          className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-semibold placeholder:font-normal text-gray-700"
          {...register("email")}
          required
        />
      </div>
      <div className="w-full min-h-max flex mx-auto flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={passwordId}
          className="sm:pl-6 font-semibold text-gray-900 text-sm"
        >
          Password: *
        </label>
        <input
          id={passwordId}
          type="password"
          placeholder="Password"
          className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50
                    text-md font-semibold text-gray-700 placeholder:font-normal"
          {...register("password")}
          required
        />
      </div>
      <div className="w-full min-h-max flex justify-between">
        <button className="text-sm sm:pl-6 lg:text-xs font-light text-gray-400 transition-colors duration-200 hover:text-gray-500 self-start flex items-center gap-1">
          <i className="fa-solid fa-key"></i>
          Forgot Password
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
