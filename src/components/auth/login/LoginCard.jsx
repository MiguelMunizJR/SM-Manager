import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginCard = ({ handleSubmit, submitForm, register }) => {
  return (
    <article className="w-full sm:max-w-sm min-h-max px-4 pt-28 sm:py-4 font-default flex flex-col bg-gray-50 sm:mt-20 sm:mb-10 sm:items-center sm:shadow-lg sm:rounded-lg">
      <div className="w-full min-h-max sm:py-6 sm:px-6 flex flex-col">
        <article
          className="min-w-full flex flex-row-reverse"
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
        </article>
        <LoginForm
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          register={register}
        />
        <div className="w-full min-h-max flex justify-center mt-4">
          <h5 className="mx-auto mt-2 text-sm font-normal text-gray-400">
            don&apos;t have an account?
            <NavLink
              to="/auth/register"
              className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
            >
              {" "}
            Sign up
            </NavLink>
          </h5>
        </div>
      </div>
    </article>
  );
};

export default LoginCard;
