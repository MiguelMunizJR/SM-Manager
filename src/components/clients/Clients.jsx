// Dependencies
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components & utils
import ClientsCard from "./ClientsCard";
import SearchBar from "../container/SearchBar";
import FormModal from "../container/FormModal";
import ButtonMobile from "../container/ButtonMobile";
import TimelineNav from "../container/TimelineNav";
import ReturnButton from "../container/ReturnButton";
import { ROUTES_PATH } from "../../consts";
import useClients from "../../hooks/useClients";

const Clients = ({
  user,
  isLogin,
  isShowClientsForm,
  setIsShowClientsForm,
  setShowSideNav,
  update,
  setUpdate,
  activePage,
  setActivePage,
}) => {
  const [filterClients, setFilterClients] = useState(null);
  const {clients, getAllClients} = useClients();

  useEffect(() => {
    isLogin && getAllClients();
    setActivePage(ROUTES_PATH.CLIENTS);
    setShowSideNav(false);
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
            duration: .12,
          }}
        >
          <FormModal
            activePage={activePage}
            setIsShowClientsForm={setIsShowClientsForm}
            setShowSideNav={setShowSideNav}
            getAllClients={getAllClients}
            update={update}
            setUpdate={setUpdate}
          />
          <section className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10" onClick={() => setIsShowClientsForm(false)}></section>
        </motion.section>
      )}
      
      <section className="w-full min-h-screen md:px-10 lg:pl-60 flex flex-col bg-slate-50">
        <TimelineNav
          actualPage="Clients"
          actualIcon="fa-solid fa-users"
          prevPag="Home"
          prevIcon="fa-solid fa-home"
        />
        <ReturnButton />
        <motion.article
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.3,
          }}
        >
          <article className="mt-12 px-4 font-default text-gray-800">
            <h4 className="flex items-center gap-1 text-xl font-medium text-blue-700">
              Hi,
              <span className="text-gray-900">
                { clients ? (user?.firstName.charAt(0).toUpperCase() +
                  user?.firstName.slice(1)) : "User"
                }
              </span>
            </h4>
            <h2 className="mt-4 pl-2 font-semibold flex items-center gap-1 text-[20px] md:text-2xl text-gray-800">
              You have
              <span className="text-blue-700">
                {
                  clients ? clients?.filter((user) => user.status === "active").length : 0
                }
              </span>
              active clients today
            </h2>
          </article>
        </motion.article>
        <motion.div
          className="px-4"
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
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
