// Dependencies
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components & utils
import ModalDelete from "../container/ModalDelete";
import SearchBar from "../container/SearchBar";
import TimelineNav from "../container/TimelineNav";
import ButtonMobile from "../navbar/ButtonMobile";
import FormModal from "../container/FormModal";
import TasksCard from "./TasksCard";
import ReturnButton from "../container/ReturnButton";
import { ROUTES_PATH } from "../../consts";
import useTasks from "../../hooks/useTasks";

const Tasks = ({
  isLogin,
  isShowTasksForm,
  setIsShowTasksForm,
  update,
  setUpdate,
  showDelete,
  setShowDelete,
  activePage,
  setActivePage,
  setShowSideBar
}) => {
  const [filterTasks, setFilterTasks] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const {tasks, getAllTasks} = useTasks();

  useEffect(() => {
    isLogin && getAllTasks();
    setActivePage(ROUTES_PATH.TASKS);
    setShowSideBar(false);
  }, []);

  return (
    <>
      {/* Form Animation */}
      {isShowTasksForm && (
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
            setIsShowTasksForm={setIsShowTasksForm}
            getAllTasks={getAllTasks}
            update={update}
            setUpdate={setUpdate}
          />
          <section className="w-screen h-screen opacity-30 dark:opacity-30 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
        </motion.section>
      )}
      {/* Modal Delete Confirm */}
      {showDelete && (
        <motion.section
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
          }}
        >
          <ModalDelete
            setShowDelete={setShowDelete}
            setIsDelete={setIsDelete}
            activePage={activePage}
          />
          <section className="w-screen h-screen opacity-30 dark:opacity-50 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
        </motion.section>
      )}
      <section className="w-full min-h-screen lg:ml-44 md:pl-8 flex flex-col justify-between bg-gray-50">
        <motion.div
          className="w-full min-h-max flex justify-between"
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          <TimelineNav
            actualPage="Tasks"
            actualIcon="fa-solid fa-list-check"
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
              Hi,{" "}
              <span className="text-gray-800">
                {/* {userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1)} */}
              </span>
            </h4>
            <h2 className="mt-1 pl-4 font-semibold text-2xl text-gray-800">
              You have{" "}
              <span className="text-blue-700">
                {
                  tasks?.filter((task) => task.status === "not_completed")
                    .length
                }
              </span>{" "}
              pending tasks today
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
            setFilterTasks={setFilterTasks}
            tasks={tasks}
          />
        </motion.div>
        <TasksCard
          tasks={tasks}
          getAllTasks={getAllTasks}
          setIsShowTasksForm={setIsShowTasksForm}
          setUpdate={setUpdate}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          setShowDelete={setShowDelete}
          activePage={activePage}
          filterTasks={filterTasks}
          isReload={isReload}
          setIsReload={setIsReload}
        />
        <ButtonMobile
          setIsShowTasksForm={setIsShowTasksForm}
          setUpdate={setUpdate}
          activePage={activePage}
        />
      </section>
    </>
  );
};

export default Tasks;
