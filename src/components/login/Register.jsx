import { NavLink } from "react-router-dom";
import TimelineNav from "../../utilities/container/TimelineNav";
import { useForm } from "react-hook-form";
import axios from "axios";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = (data) => {
    const URL = "";

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    reset({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        <article className="w-full h-16 md:mt-3 flex justify-between items-center bg-gray-50 z-40 md:bg-transparent">
          <section className="w-full md:hidden ml-5 flex gap-4 items-center text-gray-800">
            <NavLink to="/">
              <h1 className="py-2 font-default text-xl font-semibold">
                SM Manager
              </h1>
            </NavLink>
          </section>
        </article>
        <TimelineNav
          actualPage="Sign up"
          actualIcon="fa-solid fa-key"
          prevPag="Home"
          prevIcon="fa-solid fa-home"
        />
        <section className="w-full h-full flex items-center justify-center">
          <article className="w-5/6 h-full mt-24 font-default flex flex-col">
            <h4 className="text-xs text-blue-500 font-semibold">Welcome</h4>
            <h2 className="mt-2 text-gray-800 font-medium text-3xl">Sign up</h2>
            <form className="w-full min-h-max mt-8 flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit(submitForm)}>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
                <label
                  htmlFor="firstName"
                  className="font-semibold text-gray-900 text-sm"
                >
                  First Name: *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("firstName")}
                  required
                />
              </div>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
                <label
                  htmlFor="lastName"
                  className="font-semibold text-gray-900 text-sm"
                >
                  Last Name: *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("lastName")}
                  required
                />
              </div>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
                <label
                  htmlFor="email"
                  className="font-semibold text-gray-900 text-sm"
                >
                  Email: *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("email")}
                  required
                />
              </div>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
                <label
                  htmlFor="password"
                  className="font-semibold text-gray-900 text-sm"
                >
                  Password: *
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("password")}
                  required
                />
              </div>
              <button className="w-1/2 h-10 flex justify-center items-center gap-2 self-end mt-4 font-medium rounded drop-shadow-lg text-gray-50 bg-blue-500">
                Sign up
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
              <div className="w-full h-min-max mt-2 flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-300">
                  Or sign up with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </form>
            <h5 className="mt-4 mx-auto text-sm font-medium text-gray-500">
              Already have a account?
              <NavLink to="/login" className="font-semibold text-blue-500">
                {" "}
                Login
              </NavLink>
            </h5>
          </article>
        </section>
      </section>
    </>
  );
};

export default Register;
