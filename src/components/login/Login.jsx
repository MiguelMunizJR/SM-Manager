import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TimelineNav from "../../utilities/container/TimelineNav";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import { useId } from "react";

const Login = ({ getUserInfo, setActivePage, setIsLoading, loadingEnd }) => {
  const { register, handleSubmit, reset } = useForm();
  const { emailId, passwordId } = useId();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setActivePage("/auth");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const submitForm = (data) => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/auth/login";

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res?.data.token);
        reset({
          email: "",
          password: "",
        });
        loadingEnd();
        getUserInfo();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50 overflow-y-hidden">
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
            <h1 className="py-2 font-default text-xl md:text-xl font-bold drop-shadow-sm">
              <span className="py-1 px-2 rounded-md bg-blue-700 text-gray-50 font-bold drop-shadow-md">
                SM
              </span>{" "}
              Manager
            </h1>
          </NavLink>
          <NavLink
            to="/auth/register"
            className="px-4 py-2 mt- text-gray-50 text-sm md:text-base bg-blue-600 transition-all duration-100 hover:bg-blue-700 rounded-md cursor-pointer drop-shadow-md sm:drop-shadow-lg sm:px-6"
          >
            Sign up
          </NavLink>
        </motion.header>
        {/* <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 1,
            ease: "easeInOut",
          }}
        >
          <TimelineNav
            activePage="/auth/login"
            actualPage="Login"
            actualIcon="fa-solid fa-key"
          />
        </motion.div> */}
        <section className="w-full h-screen sm:h-screen mt-14 pt-6 flex justify-center bg-gray-50 overflow-y-hidden">
          <article className="w-full max-h-screen hidden sm:block absolute inset-0 z-0 bg-slate-500">
            <img
              src="https://i.postimg.cc/G2xq1P35/pexels-pixabay-265685.jpg"
              alt="hero_login"
              className="w-full h-full object-cover filter blur-sm opacity-70 bg-gray-800"
            />
          </article>
          <article className="w-5/6 max-w-2xl min-h-max pt-10 sm:pt-0 font-default flex flex-col bg-gray-50 sm:mt-20 sm:w-3/5 sm:min-h-max sm:items-center sm:absolute sm:inset-0 sm:inset-x-auto sm:z-10 sm:shadow-lg sm:rounded-lg md:w-3/6 md:flex-row lg:w-2/3">
            <div className="w-full min-h-max sm:py-6 lg:py-2 sm:px-6 flex flex-col">
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
              <motion.form
                className="w-full min-h-max mt-8 flex flex-col gap-4 justify-center items-center"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.2,
                  ease: "easeInOut",
                }}
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
                  <span className="flex-shrink mx-4 text-gray-300">
                    Or login with
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </motion.form>
              <div className="w-full min-h-max flex justify-center fixed sm:relative bottom-6 sm:bottom-0 sm:top-4 lg:top-4 left-1/2 -translate-x-1/2">
                <motion.h5
                  className="mx-auto mt-2 text-sm font-medium text-gray-500"
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
            {/* Login Image Card */}
            <div className="w-full min-h-full lg:h-5/6 hidden rounded-r-lg lg:flex bg-red-300">
              <img
                src="https://i.postimg.cc/ZRQgVmnb/pexels-cottonbro-studio-4069289.jpg"
                alt="hero-login"
                className="w-full h-full rounded-r-lg object-contain"
              />
            </div>
          </article>
        </section>
      </section>
    </>
  );
};

export default Login;
