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
        <section className="flex flex-col pt-16 bg-gray-50">
          <motion.header
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5 }}
          >
            <HomeHeader userSession={userSession} />
          </motion.header>
          <motion.article
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            <SecureInfo />
          </motion.article>
          <motion.section
            className="w-11/12 min-h-max mx-auto mt-10 flex justify-center gap-8 font-default"
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
