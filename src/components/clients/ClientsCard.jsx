// Dependencies
import { useState } from "react";
import { motion } from "framer-motion";
// Components & utils
import ButtonHeader from "../container/ButtonHeader";
import ClientsListRender from "./ClientsListRender";
import ClientsCardRender from "./ClientsCardRender";

const ClientsCard = ({
  clients,
  getAllClients,
  filterClients,
  setUpdate,
  setIsShowClientsForm,
  activePage,
}) => {
  const [isSort, setIsSort] = useState(false);
  const [reload, setReload] = useState(false);

  const setSort = () => {
    setIsSort(!isSort);
  };

  const reloadUsers = () => {
    setReload(true);
    getAllClients();
  };

  const usersReady = () => {
    if (clients) {
      setReload(false);
    }
    setReload(false);
  };

  return (
    <section className="w-full h-5/6 mt-7 mx-auto relative z-0 flex flex-col justify-center gap-4">
      <motion.article
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.6,
          ease: "easeInOut",
        }}
      >
        <article className="w-full flex justify-between items-center">
          <div className="sm:ml-3 md:ml-6 lg:ml-8 flex items-center text-gray-900 dark:text-gray-300">
            <h2 className="ml-4 font-default text-2xl font-medium">Clients</h2>
            <i className="fa-solid fa-users pl-2 text-md"></i>
          </div>
          <div className="mr-4 sm:mr-8 md:mr-10 lg:mr-24 flex justify-center items-center gap-2">
            <div className="mr-2 md:hidden">
              <ButtonHeader
                setIsShowClientsForm={setIsShowClientsForm}
                setUpdate={setUpdate}
                activePage={activePage}
              />
            </div>
            <button
              className="p-2 text-lg drop-shadow-sm text-gray-800"
              onClick={reloadUsers}
              onAnimationEnd={usersReady}
            >
              <i
                className={`${reload && "animate-reload"} fa-solid fa-rotate`}
              ></i>
            </button>
            <button
              onClick={setSort}
              className="p-2 text-lg drop-shadow-sm text-gray-800"
            >
              {isSort ? (
                <i className="fa-solid fa-arrow-up-short-wide"></i>
              ) : (
                <i className="fa-solid fa-arrow-down-wide-short"></i>
              )}
            </button>
          </div>
        </article>
      </motion.article>
      <article className="w-11/12 mx-auto mb-4 rounded h-full md:h-5/6 md:rounded-lg bg-gray-100 dark:bg-gray-800 drop-shadow-md dark:drop-shadow-lg dark:shadow-black z-0 overflow-y-auto">
        {reload ? (
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-400 dark:text-gray-600 animate-pulse">
            <i className="fa-solid fa-bars-progress text-8xl"></i>
            <h2 className="font-default text-2xl ">Loading Data ...</h2>
          </div>
        ) : clients?.length === 0 ? (
          <article className="w-full h-full flex flex-col justify-center items-center font-default text-gray-400 gap-2">
            <i className="fa-regular fa-face-frown text-7xl"></i>
            <h2 className="font-medium text-3xl">Empty Clients</h2>
            <h4 className="text-xl">Press + to add new clients</h4>
          </article>
        ) : (
          <>
            <table className="invisible absolute -z-10 md:visible md:relative md:z-0 table-fixed w-full text-center">
              <thead>
                <tr>
                  <th className="text-sm font-medium text-slate-400 py-3">
                    Name
                  </th>
                  <th className="text-sm font-medium text-slate-400 py-3">
                    Email
                  </th>
                  <th className="text-sm font-medium text-slate-400 py-3">
                    Firstname
                  </th>
                  <th className="text-sm font-medium text-slate-400 py-3">
                    Lastname
                  </th>
                  <th className="text-sm font-medium text-slate-400 py-3">
                    Birthday
                  </th>
                  <th className="text-sm font-medium text-slate-400 py-3">
                    Edit / Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <ClientsListRender
                  getAllClients={getAllClients}
                  clients={clients}
                  filterClients={filterClients}
                  setUpdate={setUpdate}
                  setIsShowClientsForm={setIsShowClientsForm}
                />
              </tbody>
            </table>
            <ClientsCardRender
              clients={clients}
              filterClients={filterClients}
              getAllClients={getAllClients}
              setUpdate={setUpdate}
              setIsShowClientsForm={setIsShowClientsForm}
            />
          </>
        )}
      </article>
    </section>
  );
};

export default ClientsCard;
