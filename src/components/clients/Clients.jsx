// Dependencies
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components & utils
import ClientsCard from "./ClientsCard";
import SearchBar from "../container/SearchBar";
import FormModal from "../container/FormModal";
import ButtonMobile from "../navbar/ButtonMobile";
import TimelineNav from "../container/TimelineNav";
import ReturnButton from "../container/ReturnButton";
import { ROUTES_PATH } from "../../consts";
import useClients from "../../hooks/useClients";

const Clients = ({
  isLogin,
  isShowClientsForm,
  setIsShowClientsForm,
  update,
  setUpdate,
  activePage,
  setActivePage,
  setShowSideBar,
}) => {
  const [filterClients, setFilterClients] = useState(null);
  const {clients, getAllClients} = useClients();

  useEffect(() => {
    isLogin && getAllClients();
    setActivePage(ROUTES_PATH.CLIENTS);
    setShowSideBar(false);
  }, []);

  return (
    <>
      {/* Form Animation */}
      {isShowClientsForm && (
        <motion.section
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
          }}
        >
          <FormModal
            activePage={activePage}
            setIsShowClientsForm={setIsShowClientsForm}
            getAllClients={getAllClients}
            update={update}
            setUpdate={setUpdate}
          />
          <section className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10"></section>
        </motion.section>
      )}
      <section className="w-full min-h-screen lg:ml-44 md:pl-8 flex flex-col justify-between bg-gray-50">
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          <TimelineNav
            actualPage="Clients"
            actualIcon="fa-solid fa-users"
            prevPag="Home"
            prevIcon="fa-solid fa-home"
          />
          <ReturnButton />
        </motion.div>
        <motion.article
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut",
          }}
        >
          <article className="mt-6 pl-4 font-default text-gray-800">
            <h4 className="text-xl font-medium text-blue-700">
              Hi,
              <span className="text-gray-900">
                {/* {userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1)} */}
              </span>
            </h4>
            <h2 className="mt-1 pl-4 font-semibold flex items-center gap-2 text-2xl text-gray-800">
              You have
              <span className="text-blue-700">
                {clients?.filter((user) => user.status === "active").length}
              </span>
              active clients today
            </h2>
          </article>
        </motion.article>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          <SearchBar
            activePage={activePage}
            setFilterClients={setFilterClients}
            clients={clients}
          />
        </motion.div>
        <ClientsCard
          getAllClients={getAllClients}
          clients={clients}
          filterClients={filterClients}
          setFilterClients={setFilterClients}
          setUpdate={setUpdate}
          setIsShowClientsForm={setIsShowClientsForm}
          activePage={activePage}
        />
        <ButtonMobile
          setIsShowClientsForm={setIsShowClientsForm}
          setUpdate={setUpdate}
          activePage={activePage}
        />
      </section>
    </>
  );
};

export default Clients;
