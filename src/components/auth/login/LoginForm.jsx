import { useId } from "react";

const LoginForm = ({ handleSubmit, submitForm, register }) => {
  const { emailId, passwordId } = useId();

  return (
    <form
      className="w-full min-h-max mt-8 flex flex-col gap-2 justify-center items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={emailId}
          className="sm:pl-1 flex items-center gap-2 font-semibold text-gray-700 text-sm"
        >
          <i className="fa-solid fa-envelope"></i>
          Email: *
        </label>
        <div className="flex">
          <input
            id={emailId}
            type="email"
            placeholder="Email"
            className="w-full email h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-medium text-gray-500"
            {...register("email")}
            required
          />
        </div>
      </div>
      <div className="w-full min-h-max flex mx-auto flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={passwordId}
          className="sm:pl-1 flex items-center gap-2 font-semibold text-gray-700 text-sm"
        >
          <i className="fa-solid fa-key"></i>
          Password: *
        </label>
        <div className="flex justify-center items-center">
          <input
            id={passwordId}
            type="password"
            placeholder="Password"
            className="w-full h-10 pl-2 sm:mx-auto password bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50
            text-md font-medium text-gray-500 placeholder:font-medium"
            {...register("password")}
            required
          />
        </div>
      </div>
      <div className="w-full min-h-max flex justify-between">
        <button className="text-sm pl-2 lg:text-xs font-light text-gray-400 transition-colors duration-200 hover:text-gray-500 self-start flex items-center gap-1">
          Forgot Password
          <i className="fa-solid fa-unlock"></i>
        </button>
      </div>
      <button
        className="w-2/5 h-10 flex justify-center items-center gap-2 self-end my-4 rounded drop-shadow-lg text-gray-50 bg-blue-600 transition-all duration-100 hover:bg-blue-700"
        onClick={handleSubmit(submitForm)}
      >
        Login
        <i className="fa-solid fa-arrow-right-long "></i>
      </button>
    </form>
  );
};

export default LoginForm;
