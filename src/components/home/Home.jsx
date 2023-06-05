// Dependencies
import { useEffect } from "react";
import { motion } from "framer-motion";
// Components & utils
import SecureInfo from "./SecureInfo";
import HomeRender from "./HomeRender";
import WelcomeInfo from "./WelcomeInfo";
import useUser from "../../hooks/useUser";

const Home = ({ isLogin, setShowSideNav }) => {
  const { getUserInfo } = useUser();

  useEffect(() => {
    isLogin && getUserInfo();
    setShowSideNav(false);
  }, []);

  return (
    <>
      <section className="w-full m-auto min-h-screen pt-14 md:pt-20 px-4 md:px-12 lg:px-20 lg:pl-64">
        <motion.article
          className="flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <WelcomeInfo />
          <SecureInfo />
        </motion.article>
        <section className="mt-10 md:mt-14 flex justify-center items-center gap-8 lg:gap-16 font-default">
          <HomeRender isLogin={isLogin} />
        </section>
      </section>
    </>
  );
};

export default Home;
