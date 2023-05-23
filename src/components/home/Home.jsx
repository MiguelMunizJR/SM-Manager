// Dependencies
import { useEffect } from "react";
import { motion } from "framer-motion";
// Components & utils
import SecureInfo from "./SecureInfo";
import HomeRender from "./HomeRender";
import WelcomeInfo from "./WelcomeInfo";
import { ROUTES_PATH } from "../../consts";

const Home = ({ setActivePage, setShowSideBar, isLogin }) => {

  useEffect(() => {
    setActivePage(ROUTES_PATH.HOME);
    setShowSideBar(false);
  }, []);

  return (
    <>
      <section className="w-full min-h-screen pt-14">
        <section className="flex flex-col gap-8 bg-slate-100">
          <motion.header
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <WelcomeInfo />
          </motion.header>
          <motion.article
            className="md:w-11/12 md:flex md:mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <article className="w-full hidden md:flex flex-col gap-3 font-default text-gray-800">
              <article className="hidden md:flex flex-col font-default text-gray-800">
                {isLogin ? (
                  <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl lg:text-3xl font-semibold">
                    <h4 className="text-blue-700">Welcome back,</h4>
                    <span className="text-gray-800">
                      {/* {isLogin
                        ? userSession?.firstName.charAt(0).toUpperCase() +
                          userSession?.firstName.slice(1)
                        : null} */}
                      !
                    </span>
                  </div>
                ) : null}
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
            <HomeRender isLogin={isLogin} />
          </motion.section>
        </section>
      </section>
    </>
  );
};

export default Home;
