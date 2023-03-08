import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalDelete from "../container/ModalDelete";
import SearchBar from "../container/SearchBar";
import TimelineNav from "../container/TimelineNav";
import ButtonMobile from "../navbar/ButtonMobile";
import FormModal from "../container/FormModal";
import TasksCard from "./TasksCard";

const Tasks = ({
  isShowTasksForm,
  setIsShowTasksForm,
  setIsLoading,
  update,
  setUpdate,
  showDelete,
  setShowDelete,
  activePage,
  setActivePage,
  setShowSideBar,
  userSession,
}) => {
  const [tasks, setTasks] = useState(null);
  const [filterTasks, setFilterTasks] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const [isReload, setIsReload] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    !tasks && setIsLoading(true);
    getAllTasks();
    setActivePage("/tasks");
    setShowSideBar(false);
  }, []);

  const getAllTasks = () => {
    const URL = "https://crud-api-express.onrender.com/api/v1/tasks";

    axios
      .get(URL, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((res) => {
        setTasks(res.data?.data);
        setIsLoading(false);
        setIsReload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
            setIsLoading={setIsLoading}
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
            setIsLoading={setIsLoading}
          />
          <section className="w-screen h-screen opacity-30 dark:opacity-50 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
        </motion.section>
      )}
      <section className="w-full h-screen flex flex-col justify-between bg-gray-50">
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
            actualPage="Tasks"
            actualIcon="fa-solid fa-list-check"
            prevPag="Home"
            prevIcon="fa-solid fa-home"
          />
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
            <h4 className="text-lg font-medium text-blue-600">
              Hi,{" "}
              <span className="text-gray-800">
                {userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1)}
              </span>
            </h4>
            <h2 className="mt-1 pl-4 font-medium text-2xl text-gray-700">
              You have{" "}
              <span className="text-blue-600">
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
          setIsLoading={setIsLoading}
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
