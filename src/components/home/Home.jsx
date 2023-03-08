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
          ></motion.div>
          <motion.div
            className="font-default text-gray-800 pl-4"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.4,
              ease: "easeInOut",
            }}
          >
            {userSession ? (
              <div className="flex gap-1 items-center mt-5 text-xl font-medium">
                <h4 className="text-blue-700">Hello,</h4>
                <span className="text-gray-800">
                  {userSession
                    ? userSession?.firstName.charAt(0).toUpperCase() +
                      userSession?.firstName.slice(1)
                    : null}
                  !
                </span>
              </div>
            ) : (
              <div className="flex gap-1 items-center mt-5 text-xl font-medium">
                <h4 className="text-gray-700">
                  Welcome to <span className="text-blue-700">SM Manager!</span>
                </h4>
              </div>
            )}
          </motion.div>
          <motion.div
            className="w-11/12 min-h-max mx-auto flex justify-center items-center"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <h2 className="mt-4 font-semibold text-3xl text-gray-800">
              Organize your your work and your life.
            </h2>
          </motion.div>
          <motion.div
            className="w-full min-h-max mt-6 py-4 bg-gray-700"
            initial={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
              duration: 0.5,
              delay: 0,
              ease: "easeInOut",
            }}
          >
            <div className="w-5/6 min-h-max mx-auto flex flex-col gap-3 font-default text-gray-100 text-center">
              <h4 className="text-xl font-bold">Secure</h4>
              <p className="text-sm font-medium">
                We believe in total user privacy. Your data belongs to you and
                only you.
              </p>
            </div>
            <div className="w-full min-h-max mt-4 flex gap-3 font-default text-gray-100">
              <div className="w-full min-h-max flex flex-col justify-center items-center font-default text-gray-100">
                <span className="font-bold text-gray-100 text-2xl">1M+</span>
                <p className="font-medium text-gray-300 text-sm">SM users</p>
              </div>
              <div className="w-full min-h-max flex flex-col justify-center items-center font-default text-gray-100">
                <div className="min-h-max flex items-center justify-center gap-3">
                  <span className="font-bold text-gray-100 text-2xl">4.5</span>
                  <img
                    src="https://i.postimg.cc/50VRHzkC/estrella-removebg-preview.png"
                    alt="star-icon"
                    className="w-8 object-cover pb-1"
                  />
                </div>
                <p className="font-medium text-gray-300 text-sm">
                  Secure rating
                </p>
              </div>
            </div>
          </motion.div>
          <section className="w-11/12 min-h-max mx-auto mt-10 flex justify-center gap-8 font-default">
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
              {itemsHome.map((item) => (
                <NavLink
                  to={userSession ? item.route : "/auth/login"}
                  className={item.className}
                  key={item.id}
                >
                  <div className="py-1 px-4 flex gap-2 items-center">
                    <i className={item.icon}></i>
                    <h2 className="font-bold text-xl">{item.title}</h2>
                    <div className="w-5/6 min-h-max absolute bottom-3 flex items-center font-semibold text-sm">
                      <div className="w-full min-h-max flex items-center gap-2">
                        <i className="fa-solid fa-pie-chart"></i>
                        <small className="">
                          <span>{}4 </span>/ 20
                        </small>
                      </div>
                      <button className="transition-all duration-100 hover:scale-125">
                        <i className="fa-solid fa-long-arrow-right text-gray-100 text-2xl"></i>
                      </button>
                    </div>
                  </div>
                </NavLink>
              ))}
            </motion.article>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
