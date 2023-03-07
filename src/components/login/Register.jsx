import { NavLink, useNavigate } from "react-router-dom";
import TimelineNav from "../../utilities/container/TimelineNav";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useId } from "react";

const Register = ({ setActivePage, setIsLoading }) => {
  const { register, handleSubmit, reset } = useForm();
  const { firstNameId, lastNameId, emailId, passwordId } = useId();
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
    const URL = "https://crud-api-express.onrender.com/api/v1/auth/register";

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        reset({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate("/auth/login");
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="w-full min-h-screen flex flex-col pb-14">
        <header className="w-full h-14 py-6 flex justify-between items-center transition-colors duration-150 bg-gray-50 z-40 fixed top-0 left-0">
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            <article className="w-screen min-h-screen px-4 lg:px-6 flex items-center justify-between text-gray-900 sm:text-gray-800">
              <h1 className="py-2 font-default text-xl md:text-xl font-bold drop-shadow-sm">
                <span className="py-1 px-2 rounded-md bg-blue-700 text-gray-50 font-bold drop-shadow-md">
                  SM
                </span>{" "}
                Manager
              </h1>
              <NavLink
                to="/auth/login"
                className="px-4 py-2 mt- text-blue-600 text-sm md:text-base border-2 border-blue-600 transition-all duration-100 hover:bg-blue-700 hover:border-blue-700 hover:text-gray-200 rounded-lg cursor-pointer drop-shadow-md sm:drop-shadow-lg sm:px-6"
              >
                Login
              </NavLink>
            </article>
          </motion.header>
        </header>
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
            activePage="/auth/register"
            actualPage="Sign up"
            actualIcon="fa-solid fa-key"
          />
        </motion.div> */}
        <section className="w-full min-h-screen sm:h-screen mt-4 pt-6 flex justify-center bg-gray-50 overflow-y-hidden">
          <article className="w-full md:mt-10 hidden sm:block fixed inset-0 z-0 bg-slate-800">
            <img
              src="https://i.postimg.cc/wvBGWsFY/pexels-d-vaughn-bell-2068664.jpg"
              alt="hero_login"
              className="w-full h-full object-cover filter blur-sm opacity-70 bg-gray-200"
            />
          </article>
          <article className="w-11/12 max-w-3xl min-h-max pt-20 sm:pt-0 font-default flex flex-col bg-gray-50 sm:mt-20 sm:w-3/5 sm:min-h-max sm:items-center sm:absolute sm:inset-0 sm:inset-x-auto sm:z-10 sm:shadow-lg sm:rounded-lg md:w-3/6 md:flex-row lg:w-2/3">
            <div className="w-full min-h-max px-4 sm:py-4 flex flex-col">
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
                    Welcome
                  </h4>
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
              <motion.form
                className="w-full min-h-max mt-8 flex flex-col gap-2 md:gap-1 justify-center items-center"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 1.2,
                  ease: "easeInOut",
                }}
                onSubmit={handleSubmit(submitForm)}
              >
                <div className="w-full min-h-max flex gap-2 justify-center items-center sm:w-5/6">
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
                      className="w-full lg:w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-semibold placeholder:font-normal text-gray-700"
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
                      className="w-full lg:w-full h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-semibold placeholder:font-normal text-gray-700"
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
                    className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-semibold placeholder:font-normal text-gray-700"
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
                    className="w-full sm:w-5/6 lg:w-4/5 h-10 pl-2 sm:mx-auto bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-600 hover:border-blue-600 focus:bg-blue-50 hover:bg-blue-50 text-md font-semibold placeholder:font-normal text-gray-700"
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
                  <span className="flex-shrink mx-4 text-gray-300">
                    Or sign up with
                  </span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
              </motion.form>
              <div className="w-full min-h-max flex justify-center sm:relative bottom-6 sm:bottom-0 sm:top-4 lg:top-8 lg:left-1/2 lg:-translate-x-1/2">
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
            {/* Login Image Card */}
            <div className="w-full min-h-full lg:h-5/6 hidden rounded-r-lg lg:flex bg-red-300">
              <img
                src="https://i.postimg.cc/7LQZtSDg/pexels-tima-miroshnichenko-5717640.jpg"
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

export default Register;
