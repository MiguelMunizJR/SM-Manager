import { useId } from "react";

const RegisterForm = ({ handleSubmit, submitForm, register }) => {
  const { firstNameId, lastNameId, emailId, passwordId } = useId();

  return (
    <form
      className="w-full min-h-max mt-8 flex flex-col gap-1 justify-center items-center"
      onSubmit={handleSubmit(submitForm)}
    >
      <div className="w-full min-h-max flex sm:flex-col gap-1 items-center">
        <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
          <label
            htmlFor={firstNameId}
            className="flex items-center gap-2 font-semibold text-gray-600 text-sm"
          >
            <i className="fa-solid fa-id-card"></i>
            First Name: *
          </label>
          <input
            id={firstNameId}
            type="text"
            placeholder="Miguel"
            className="w-full lg:w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-medium text-gray-500"
            {...register("firstName")}
            required
          />
        </div>
        <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
          <label
            htmlFor={lastNameId}
            className="flex items-center gap-2 font-semibold text-gray-600 text-sm"
          >
            <i className="fa-solid fa-id-card"></i>
            Last Name: *
          </label>
          <input
            id={lastNameId}
            type="text"
            placeholder="Muñiz"
            className="w-full lg:w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-medium text-gray-500"
            {...register("lastName")}
            required
          />
        </div>
      </div>
      <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={emailId}
          className="flex items-center gap-2 font-semibold text-gray-600 text-sm"
        >
          <i className="fa-solid fa-envelope"></i>
          Email: *
        </label>
        <input
          id={emailId}
          type="email"
          placeholder="miguel@hotmail.com"
          className="w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-medium text-gray-500"
          {...register("email")}
          required
        />
      </div>
      <div className="w-full min-h-max flex flex-col gap-2 p-2 justify-center">
        <label
          htmlFor={passwordId}
          className="flex items-center gap-2 font-semibold text-gray-600 text-sm"
        >
          <i className="fa-solid fa-key"></i>
          Password: *
        </label>
        <input
          id={passwordId}
          type="password"
          placeholder="*********"
          className="w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-medium placeholder:font-medium text-gray-500"
          {...register("password")}
          required
        />
      </div>
      <button
        className="w-2/5 h-10 flex justify-center items-center gap-2 self-end my-6 rounded drop-shadow-lg text-gray-50 bg-blue-600 transition-all duration-100 hover:bg-blue-700"
        onClick={handleSubmit(submitForm)}
      >
        Sign up
        <i className="fa-solid fa-arrow-right-long"></i>
      </button>
      <div className="w-full h-min-max mt-2 hidden py-5 items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="flex-shrink mx-4 text-gray-300">Or sign up with</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
    </form>
  );
};

export default RegisterForm;
