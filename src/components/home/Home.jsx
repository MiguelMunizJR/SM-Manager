import { useEffect } from "react";
import { motion } from "framer-motion";
import SecureInfo from "./SecureInfo";
import HomeRender from "./HomeRender";
import HomeHeader from "./HomeHeader";

const Home = ({ setActivePage, setShowSideBar, userSession }) => {
  useEffect(() => {
    setActivePage("/");
    setShowSideBar(false);
  }, []);

  return (
    <>
      <section className="w-full h-screen">
        <section className="flex flex-col pt-16 md:pt-0 bg-gray-50">
          <motion.div
            className="pt-2 ml-4 lg:ml-10 flex md:absolute gap-2 items-center text-gray-600 md:text-gray-700 text-md md:text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <i className="fa-solid fa-home"></i>
            <h5>Home</h5>
          </motion.div>
          <motion.header
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <HomeHeader userSession={userSession} />
          </motion.header>
          <motion.article
            className="md:w-11/12 md:flex md:mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <article className="hidden md:flex flex-col gap-3 font-default text-gray-800">
              <article className="hidden md:flex flex-col font-default text-gray-800">
                {userSession ? (
                  <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl lg:text-3xl font-medium">
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
                  <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl font-medium">
                    <h4 className="text-gray-700">
                      Welcome to{" "}
                      <span className="text-blue-700">SM Manager!</span>
                    </h4>
                  </div>
                )}
              </article>
              <article className="w-11/12 min-h-max hidden md:flex mx-auto justify-center items-center">
                <h2 className="my-5 font-semibold text-3xl text-gray-800">
                  Organize your your work and your life.
                </h2>
              </article>
            </article>
            <SecureInfo />
          </motion.article>
          <motion.section
            className="w-11/12 lg:w-5/6 md:mt-16 pb-8 min-h-max mx-auto mt-10 flex justify-center gap-8 lg:gap-16 font-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <HomeRender userSession={userSession} />
          </motion.section>
        </section>
      </section>
    </>
  );
};

export default Home;
