import React, { useState } from "react";
import ButtonNewHeader from "../../utilities/container/ButtonHeader";
import TaskListRender from "../../utilities/tasks/TaskListRender";

const TasksCard = ({
  tasks,
  getAllTasks,
  setIsShowTasksForm,
  setUpdate,
  isDelete,
  setIsDelete,
  setShowDelete,
  activePage,
  filterTasks,
  setIsLoading,
  isReload,
  setIsReload
}) => {
  const [isSort, setIsSort] = useState(false);

  const setSort = () => {
    setIsSort(!isSort);
    //! Filter task completed and not completed
  };

  const reloadTasks = () => {
    getAllTasks();
    setIsReload(true);
  };

  const tasksReady = () => {
    if (tasks) {
      setIsReload(false);
    }
    setIsReload(false);
  };
  return (
    <section className="w-full h-5/6 mt-7 mx-auto relative z-0 flex flex-col justify-center gap-4">
      <article className="w-full flex justify-between items-center">
        <div className="sm:ml-3 md:ml-6 lg:ml-8 flex items-center text-gray-900 dark:text-gray-300">
          <h2 className="ml-4 font-default font-medium text-2xl">Tasks</h2>
          <i className="fa-solid fa-list-check pl-2 text-md"></i>
        </div>
        <div className="mr-4 sm:mr-8 md:mr-10 lg:mr-24 flex justify-center items-center gap-3">
          <div className="mr-2 md:hidden">
            <ButtonNewHeader
              setIsShowTasksForm={setIsShowTasksForm}
              setUpdate={setUpdate}
              activePage={activePage}
            />
          </div>
          <button
            className="p-2 text-lg drop-shadow-sm text-gray-800"
            onClick={reloadTasks}
            onAnimationEnd={tasksReady}
          >
            <i
              className={`${isReload && "animate-reload"} fa-solid fa-rotate`}
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
      <article className="w-11/12 mx-auto mb-4 rounded h-full md:h-5/6 md:rounded-lg bg-gray-100 dark:bg-gray-800 drop-shadow-md dark:drop-shadow-lg dark:shadow-black z-0 overflow-y-auto">
        {isReload ? (
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-400 dark:text-gray-600 animate-pulse">
            <i className="fa-solid fa-bars-progress text-8xl"></i>
            <h2 className="font-default text-2xl ">Loading Data ...</h2>
          </div>
        ) : (
          <>
            <article className="w-full h-full mx-auto">
              {tasks?.length === 0 ? (
                <article className="w-full h-full flex flex-col justify-center items-center font-default text-gray-400 gap-2">
                  <i className="fa-regular fa-face-frown text-7xl"></i>
                  <h2 className="font-medium text-3xl">Empty Tasks</h2>
                  <h4 className="text-xl">Press + to add new tasks</h4>
                </article>
              ) : (
                <TaskListRender
                  tasks={tasks}
                  getAllTasks={getAllTasks}
                  setIsShowTasksForm={setIsShowTasksForm}
                  setUpdate={setUpdate}
                  isDelete={isDelete}
                  setIsDelete={setIsDelete}
                  setShowDelete={setShowDelete}
                  filterTasks={filterTasks}
                  setIsReload={setIsReload}
                  setIsLoading={setIsLoading}
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
