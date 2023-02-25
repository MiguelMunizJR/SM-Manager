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
                to="/auth/register"
                className="mt-1 px-4 py-3 text-gray-50 text-sm bg-blue-500 rounded-md cursor-pointer drop-shadow-sm"
              >
                Sign up
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
            actualPage="Login"
            actualIcon="fa-solid fa-key"
            prevPag="Home"
            prevIcon="fa-solid fa-home"
          />
        </motion.div>
        <section className="w-full h-full flex items-center justify-center">
          <article className="w-5/6 h-full mt-24 font-default flex flex-col">
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
              <h2 className="mt-2 text-gray-800 font-medium text-3xl">Login</h2>
              <h4 className="mt-2 text-sm font-medium text-gray-400">
                Please sign in to continue
              </h4>
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
              <div className="w-full min-h-max flex mx-auto flex-col gap-2 p-2 justify-center">
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
              <div className="w-full min-h-max flex mx-auto flex-col gap-2 p-2 justify-center">
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
                  className="w-full h-10 bg-transparent border-b-2 border-b-gray-300 outline-none transition-all duration-150 focus:border-blue-500 hover:border-blue-500
                    text-lg font-normal text-gray-700"
                  {...register("password")}
                  required
                />
              </div>
              <p className="text-sm font-medium text-gray-400 self-end flex items-center gap-1">
                <i className="fa-solid fa-key"></i>
                Forgot Password
              </p>
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
                Login
                <i className="fa-solid fa-arrow-right-long "></i>
              </motion.button>
              <div className="w-full h-min-max mt-2 flex py-5 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-300">
                  Or login with
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
              don&apos;t have an account?
              <NavLink
                to="/auth/register"
                className="font-semibold text-blue-500"
              >
                {" "}
                Sign up
              </NavLink>
            </motion.h5>
          </article>
        </section>
      </section>
    </>
  );
};

export default Login;
