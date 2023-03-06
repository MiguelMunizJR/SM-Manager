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
      });
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        <article className="w-full h-14 flex justify-between items-center bg-gray-50 z-40 fixed top-0 left-0">
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
          >
            <header className="w-screen pl-4 pr-6 flex items-center justify-between gap-4 text-gray-800">
              <NavLink to="/">
                <h1 className="py-2 font-default text-xl font-semibold drop-shadow-xl">
                  SM Manager
                </h1>
              </NavLink>
              <NavLink
                to="/auth/login"
                className="mt-1 px-4 py-2 text-blue-600 text-base font-medium ring-2 ring-blue-500 rounded-sm drop-shadow-sm"
              >
                Login
              </NavLink>
            </header>
          </motion.header>
        </article>
        <motion.div
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
        </motion.div>
        <section className="w-full h-full flex items-center justify-center">
          <article className="w-5/6 h-full mt-20 font-default flex flex-col">
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.3,
                delay: 1.1,
                ease: "easeInOut",
              }}
            >
              <h4 className="text-xs text-blue-500 font-semibold">Welcome</h4>
              <h2 className="mt-2 text-gray-800 font-medium text-3xl">
                Sign up
              </h2>
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
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
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
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 hover:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("firstName")}
                  required
                />
              </div>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
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
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 hover:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("lastName")}
                  required
                />
              </div>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
                <label
                  htmlFor={emailId}
                  className="font-semibold text-gray-900 text-sm"
                >
                  Email: *
                </label>
                <input
                  id={emailId}
                  type="email"
                  placeholder="Email"
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 hover:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("email")}
                  required
                />
              </div>
              <div className="w-full min-h-max flex mx-auto flex-col gap-1 p-2 justify-center">
                <label
                  htmlFor={passwordId}
                  className="font-semibold text-gray-900 text-sm"
                >
                  Password: *
                </label>
                <input
                  id={passwordId}
                  type="password"
                  placeholder="Password"
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 hover:border-blue-500 text-lg font-normal text-gray-700"
                  {...register("password")}
                  required
                />
              </div>
              <motion.button
                className="w-1/2 h-10 flex justify-center items-center gap-2 self-end mt-4 rounded drop-shadow-lg text-gray-50 bg-blue-500"
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
              <div className="w-full h-min-max mt-2 flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-300">
                  Or sign up with
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </motion.form>
            <motion.h5
              className="mt-4 mx-auto text-sm font-medium text-gray-500"
              initial={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.4,
                ease: "easeInOut",
              }}
            >
              Already have a account?
              <NavLink to="/auth/login" className="font-semibold text-blue-500">
                {" "}
                Login
              </NavLink>
            </motion.h5>
          </article>
        </section>
      </section>
    </>
  );
};

export default Register;
