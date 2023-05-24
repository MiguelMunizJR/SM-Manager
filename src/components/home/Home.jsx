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
      <section className="w-full m-auto min-h-screen pt-14 md:pt-20 px-4 md:px-14 lg:px-32">
        <motion.article
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .2, delay: 0.6 }}
        >
          <WelcomeInfo />
          <SecureInfo />
        </motion.article>
        <motion.section
          className="mt-10 md:mt-14 flex justify-center items-center gap-8 lg:gap-16 font-default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .3, delay: .8 }}
        >
          <HomeRender isLogin={isLogin} />
        </motion.section>
      </section>
    </>
  );
};

export default Home;
