import axios from "axios";
import { useEffect, useState } from "react";

const TaskListRender = ({
  tasks,
  getAllTasks,
  setIsShowTasksForm,
  setUpdate,
  isDelete,
  setIsDelete,
  setShowDelete,
  filterTasks,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [idTask, setIdTask] = useState(null);

  useEffect(() => {
    isDelete && deleteTaskConfirm();
  }, [isDelete]);

  const deleteTaskConfirm = (id) => {
    setIdTask(id);
    if (isDelete) {
      deleteTask(idTask);
    } else {
      setShowDelete(true);
    }
  };

  const deleteTask = (id) => {
    const URL = `https://crud-api-express.onrender.com/api/v1/tasks/${id}/`;
    axios
      .delete(URL)
      .then(() => {
        getAllTasks();
        setIsDelete(false);
        setShowDelete(false);
        setIdTask(null);
      })
      .catch((err) => {
        console.log(err);
        setIsDelete(false);
        setShowDelete(false);
        setIdTask(null);
      });
  };

  const handleCompleted = (task) => {
    setIsCompleted(!isCompleted);

    const URL = `https://crud-api-express.onrender.com/api/v1/tasks/${task.id}/`;

    axios
      .patch(URL, {
        isCompleted: !task.isCompleted,
      })
      .then(() => {
        getAllTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTask = (task) => {
    setUpdate(task);
    setIsShowTasksForm(true);
  };

  return (
    <section>
      {filterTasks
        ? filterTasks?.map((task) => (
          <article
            key={task.id}
            className={
              task.isCompleted
                ? "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-green-200 dark:bg-green-900 even:bg-green-200 ring-1 ring-green-400 dark:ring-green-700 line-through decoration-green-800 dark:decoration-green-400"
                : "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-gray-100 dark:bg-gray-700 even:bg-gray-200 dark:odd:bg-gray-800 border-b border-gray-300 dark:border-gray-600"
            }
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleCompleted(task)}
                className={
                  task.isCompleted
                    ? "p-2 rounded-2xl transition-all duration-200 hover:bg-green-300 text-green-500 dark:text-green-400 text-xl"
                    : "p-2 rounded-2xl transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-400 text-xl"
                }
              >
                {task.isCompleted ? (
                  <i className="fa-solid fa-square-check"></i>
                ) : (
                  <i className="fa-regular fa-square-check"></i>
                )}
              </button>
              <div className="flex flex-col">
                <h3
                  className={
                    task.isCompleted
                      ? "font-medium text-base text-green-700 dark:text-green-400"
                      : "font-medium text-base text-gray-900 dark:text-gray-200"
                  }
                >
                  {task.title}
                </h3>
                <p
                  className={
                    task.isCompleted
                      ? "font-medium text-sm text-green-500 dark:text-green-600"
                      : "font-medium text-sm text-gray-500"
                  }
                >
                  {task.description}
                </p>
              </div>
            </div>
            <div className="mr-2 md:mr-6 flex gap-6">
              <button
                onClick={() => !task.isCompleted && updateTask(task)}
                className={
                  task.isCompleted
                    ? "ring-2 ring-green-300 dark:ring-green-700 text-green-300 dark:text-green-700 p-1 text-sm rounded-md shadow-md transition duration-100 cursor-default"
                    : "ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300 dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800 cursor-pointer"
                }
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                onClick={() => deleteTaskConfirm(task.id)}
                className="ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </article>
        ))
        : tasks?.map((task) => (
          <article
            key={task.id}
            className={
              task.isCompleted
                ? "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-green-200 dark:bg-green-900 even:bg-green-200 ring-1 ring-green-400 dark:ring-green-700 line-through decoration-green-800 dark:decoration-green-400"
                : "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-gray-100 dark:bg-gray-700 even:bg-gray-200 dark:odd:bg-gray-800 border-b border-gray-300 dark:border-gray-600"
            }
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleCompleted(task)}
                className={
                  task.isCompleted
                    ? "p-2 rounded-2xl transition-all duration-200 hover:bg-green-300 text-green-500 dark:text-green-400 text-xl"
                    : "p-2 rounded-2xl transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-400 text-xl"
                }
              >
                {task.isCompleted ? (
                  <i className="fa-solid fa-square-check"></i>
                ) : (
                  <i className="fa-regular fa-square-check"></i>
                )}
              </button>
              <div className="flex flex-col">
                <h3
                  className={
                    task.isCompleted
                      ? "font-medium text-base text-green-700 dark:text-green-400"
                      : "font-medium text-base text-gray-900 dark:text-gray-200"
                  }
                >
                  {task.title}
                </h3>
                <p
                  className={
                    task.isCompleted
                      ? "font-medium text-sm text-green-500 dark:text-green-600"
                      : "font-medium text-sm text-gray-500"
                  }
                >
                  {task.description}
                </p>
              </div>
            </div>
            <div className="mr-2 md:mr-6 flex gap-6">
              <button
                onClick={() => !task.isCompleted && updateTask(task)}
                className={
                  task.isCompleted
                    ? "ring-2 ring-green-300 dark:ring-green-700 text-green-300 dark:text-green-700 p-1 text-sm rounded-md shadow-md transition duration-100 cursor-default"
                    : "ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300 dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800 cursor-pointer"
                }
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                onClick={() => deleteTaskConfirm(task.id)}
                className="ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </article>
        ))}
    </section>
  );
};

export default TaskListRender;
