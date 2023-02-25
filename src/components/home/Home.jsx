import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import itemsHome from "../../utilities/home/itemsHome";

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
          <section className="w-11/12 min-h-max mx-auto mt-10 flex justify-center gap-8 font-default">
            {itemsHome.map((item, i) => (
              <motion.article
                className="w-full min-h-max flex gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i + 0.1,
                  ease: "easeInOut",
                }}
                key={item.id}
              >
                <NavLink
                  to={userSession ? item.route : "/auth/login"}
                  className={item.className}
                >
                  <div className="flex gap-1 items-center">
                    <i className={item.icon}></i>
                    <h2 className="font-medium text-xl text-gray-800">
                      {item.title}
                    </h2>
                  </div>
                </NavLink>
              </motion.article>
            ))}
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
