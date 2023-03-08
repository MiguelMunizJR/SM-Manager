import { motion } from "framer-motion";
import { useId } from "react";

const RegisterForm = ({ handleSubmit, submitForm, register }) => {
  const { firstNameId, lastNameId, emailId, passwordId } = useId();

  return (
    <form
      className="w-full min-h-max mt-8 flex flex-col gap-2 md:gap-1 justify-center items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="w-full min-h-max flex justify-between items-center sm:w-5/6">
        <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
          <label
            htmlFor={firstNameId}
            className="font-semibold text-gray-900 text-sm"
          >
            First Name: *
          </label>
          <input
            id={firstNameId}
            type="text"
            placeholder="First name"
            className="w-full lg:w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-normal text-gray-600"
            {...register("firstName")}
            required
          />
        </div>
        <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
          <label
            htmlFor={lastNameId}
            className="font-semibold text-gray-900 text-sm"
          >
            Last Name: *
          </label>
          <input
            id={lastNameId}
            type="text"
            placeholder="Last name"
            className="w-full lg:w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-normal text-gray-600"
            {...register("lastName")}
            required
          />
        </div>
      </div>
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
          className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-normal text-gray-600"
          {...register("email")}
          required
        />
      </div>
      <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
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
          className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-normal text-gray-600"
          {...register("password")}
          required
        />
      </div>
      <motion.button
        className="w-2/5 h-10 flex justify-center items-center gap-2 self-end mt-4 rounded drop-shadow-lg text-gray-50 bg-blue-600 transition-all duration-100 hover:bg-blue-700"
        initial={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.4,
          delay: 1.3,
          ease: "easeInOut",
        }}
      >
        Sign up
        <i className="fa-solid fa-arrow-right-long"></i>
      </motion.button>
      <div className="w-full h-min-max mt-2 hidden py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-300">Or sign up with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </form>
  );
};

export default RegisterForm;
