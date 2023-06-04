import { useState } from "react";
import { motion } from "framer-motion";

import ButtonHeader from "../container/ButtonHeader";
import TaskListRender from "./TaskListRender";

const TasksCard = ({
  tasks,
  getAllTasks,
  setIsShowTasksForm,
  setUpdate,
  filterTasks
}) => {
  const [isSort, setIsSort] = useState(false);
  const [reload, setReload] = useState(false);

  const setSort = () => {
    setIsSort(!isSort);
  };

  const reloadTasks = () => {
    getAllTasks();
    setReload(true);
  };

  const tasksReady = () => {
    if (tasks) {
      setReload(false);
    }
    setReload(false);
  };
  return (
    <section className="w-full mt-7 mx-auto px-4 relative z-0 flex flex-col justify-center gap-3">
      <motion.article
        initial={{ opacity: 0, translateY: -10 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: .2
        }}
      >
        <article className="w-full flex justify-between items-center">
          <div className="flex items-center text-gray-900 dark:text-gray-300">
            <h2 className="font-default font-medium text-2xl">Tasks</h2>
            <i className="fa-solid fa-list-check pl-2 text-md"></i>
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="mr-2 md:mr-8">
              <ButtonHeader
                setIsShowTasksForm={setIsShowTasksForm}
                setUpdate={setUpdate}
              />
            </div>
            <button
              className="p-2 text-lg drop-shadow-sm text-gray-800"
              onClick={reloadTasks}
              onAnimationEnd={tasksReady}
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
      <article className="w-full relative mb-6 drop-shadow-xl md:rounded-ml">
        {reload ? (
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-400 dark:text-gray-600 animate-pulse">
            <i className="fa-solid fa-bars-progress text-8xl"></i>
            <h2 className="font-default text-2xl ">Loading Data ...</h2>
          </div>
        ) : (
          <>
            <article className="w-full h-full mx-auto">
              {tasks?.length === 0 ? (
                <article 
                  className="w-full h-full flex flex-col py-8 justify-center items-center font-default text-gray-600 gap-2"
                >

                  <i className="fa-regular fa-face-frown text-5xl"></i>
                  <h2 className="font-medium text-3xl">Empty Tasks</h2>
                  <h4 className="text-xl">Press + to add new tasks</h4>
                </article>
              ) : (
                <TaskListRender
                  tasks={tasks}
                  getAllTasks={getAllTasks}
                  setIsShowTasksForm={setIsShowTasksForm}
                  setUpdate={setUpdate}
                  filterTasks={filterTasks}
                  setReload={setReload}
                />
              )}
            </article>
          </>
        )}
      </article>
    </section>
  );
};

export default TasksCard;
