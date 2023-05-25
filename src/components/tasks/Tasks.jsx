// Dependencies
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Components & utils
import SearchBar from "../container/SearchBar";
import TimelineNav from "../container/TimelineNav";
import ButtonMobile from "../container/ButtonMobile";
import FormModal from "../container/FormModal";
import TasksCard from "./TasksCard";
import ReturnButton from "../container/ReturnButton";
import useTasks from "../../hooks/useTasks";
import { ROUTES_PATH } from "../../consts";

const Tasks = ({
  user,
  isLogin,
  isShowTasksForm,
  setIsShowTasksForm,
  setShowSideNav,
  update,
  setUpdate,
  activePage,
  setActivePage,
}) => {
  const [filterTasks, setFilterTasks] = useState(null);
  const { tasks, getAllTasks } = useTasks();

  useEffect(() => {
    isLogin && getAllTasks();
    setActivePage(ROUTES_PATH.TASKS);
    setShowSideNav(false);
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
            duration: .12,
          }}
        >
          <FormModal
            activePage={activePage}
            setIsShowTasksForm={setIsShowTasksForm}
            setShowSideNav={setShowSideNav}
            getAllTasks={getAllTasks}
            update={update}
            setUpdate={setUpdate}
          />
          <section className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10" onClick={() => setIsShowTasksForm(false)}></section>
        </motion.section>
      )}

      <section className="w-full min-h-screen md:px-10 lg:pl-60 flex flex-col bg-slate-50">
        <TimelineNav
          actualPage="Tasks"
          actualIcon="fa-solid fa-list-check"
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
                { tasks ? (user?.firstName.charAt(0).toUpperCase() +
                  user?.firstName.slice(1)) : "User"
                }
              </span>
            </h4>
            <h2 className="mt-4 pl-2 font-semibold flex items-center gap-1 text-[20px] md:text-2xl text-gray-800">
              You have
              <span className="text-blue-700">
                {
                  tasks ? tasks?.filter((task) => task.status !== "completed").length : 0
                }
              </span>
              pending tasks today
            </h2>
          </article>
        </motion.article>
        <motion.div
          className="px-4"
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4
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
          activePage={activePage}
          filterTasks={filterTasks}
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
