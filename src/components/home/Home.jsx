import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = ({ setActivePage, setShowSideBar, userSession }) => {
  useEffect(() => {
    setActivePage("/");
    setShowSideBar(false);
  }, []);

  return (
    <>
      <section className="w-full h-screen">
        <section className="flex flex-col pt-16 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
          >
            <div className="ml-4 flex gap-1 items-center text-gray-600 text-sm">
              <i className="fa-solid fa-home"></i>
              <h5>Home</h5>
            </div>
          </motion.div>
          <article className="pl-4 font-default text-gray-800">
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4,
                ease: "easeInOut",
              }}
            >
              <div className="flex gap-1 items-center mt-5 text-xl font-medium">
                <h4 className="text-blue-600">Welcome</h4>
                <span className="text-gray-800">
                  {userSession
                    ? userSession?.firstName.charAt(0).toUpperCase() +
                      userSession?.firstName.slice(1)
                    : null}
                </span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeInOut",
              }}
            >
              <h2 className="mt-2 pl-4 font-medium text-xl text-gray-700">
                Manage your <span className="text-blue-600">clients</span> or{" "}
                <span className="text-blue-600">tasks</span> for your day-to-day
                operations
              </h2>
            </motion.div>
          </article>
          <section className="w-11/12 min-h-max mt-7 mx-auto flex flex-col gap-10 font-default">
            <article className="w-full min-h-max flex gap-4">
              <motion.article
                className="w-full min-h-max flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
              >
                <NavLink
                  to={userSession ? "/clients" : "/auth/login"}
                  className="w-full h-64 flex justify-center rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
                >
                  <div className="flex gap-1 items-center">
                    <i className="fa-solid fa-users"></i>
                    <h2 className="font-medium text-xl text-gray-800">
                      Clients
                    </h2>
                  </div>
                </NavLink>
              </motion.article>
              <motion.article
                className="w-full min-h-max flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
              >
                <NavLink
                  to={userSession ? "/tasks" : "/auth/login"}
                  className="w-full h-64 flex justify-center rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
                >
                  <div className="flex gap-1 items-center">
                    <i className="fa-solid fa-list-check"></i>
                    <h2 className="font-medium text-xl text-gray-800">Tasks</h2>
                  </div>
                </NavLink>
              </motion.article>
            </article>
            <motion.article
              className="w-full min-h-max flex gap-4"
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.9,
                ease: "easeInOut",
              }}
            >
              <NavLink
                to={userSession ? "/dashboard" : "/auth/login"}
                className="w-full h-36 flex rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
              >
                <div className="ml-4 flex gap-1 items-center">
                  <i className="fa-solid fa-gauge"></i>
                  <h2 className="font-medium text-xl text-gray-800">
                    Dashboard
                  </h2>
                </div>
              </NavLink>
            </motion.article>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
