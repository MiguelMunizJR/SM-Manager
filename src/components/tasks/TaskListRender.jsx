import { toast } from "sonner";

import { completeTask, createNewTask, deleteTask } from "../../services/tasksServices";

const TaskListRender = ({
  tasks,
  getAllTasks,
  setIsShowTasksForm,
  setUpdate,
  filterTasks,
  setReload
}) => {

  //* Eliminar tarea
  const handleDelete = (task) => {
    setReload(true);
    deleteTask(task.id)
      .then(() => {
        getAllTasks();
        toast("Task successfully eliminated", {
          action: {
            label: "Undo",
            onClick: async () => {
              await createNewTask({
                title: task?.title,
                description: task?.description,
                status: task?.status
              });
              getAllTasks();
              setReload(false);
            }
          },
        });
      })
      .catch(() => {
        toast.error("Error when deleting task");
        setReload(false);
      });
  };

  //* Completar tarea
  const handleCompleted = (task) => {
    setReload(true);
    completeTask(task)
      .then(() => {
        getAllTasks();
        toast.success("Task successfully completed");
        setReload(false);
      })
      .catch(() => {
        toast.error("Error when completing task");
        setReload(false);
      });
  };

  const updateTask = (task) => {
    setUpdate(task);
    setIsShowTasksForm(true);
  };

  return (
    <>
      {filterTasks
        ? filterTasks?.map((task) => (
          <article
            key={task.id}
          >
            <article
              className={
                task.status === "completed"
                  ? "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-green-200 dark:bg-green-900 even:bg-green-200 ring-1 ring-green-400 dark:ring-green-700 line-through decoration-green-800 dark:decoration-green-400"
                  : "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-gray-100 dark:bg-gray-700 even:bg-gray-200 dark:odd:bg-gray-800 border-b border-gray-300 dark:border-gray-600"
              }
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleCompleted(task)}
                  className={
                    task.status === "completed"
                      ? "p-2 rounded-2xl transition-all duration-200 hover:bg-green-300 text-green-500 dark:text-green-400 text-xl"
                      : "p-2 rounded-2xl transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-400 text-xl"
                  }
                >
                  {task.status === "completed" ? (
                    <i className="fa-solid fa-square-check"></i>
                  ) : (
                    <i className="fa-regular fa-square-check"></i>
                  )}
                </button>
                <div className="flex flex-col">
                  <h3
                    className={
                      task.status === "completed"
                        ? "font-medium text-base text-green-700 dark:text-green-400"
                        : "font-medium text-base text-gray-900 dark:text-gray-200"
                    }
                  >
                    {task.title}
                  </h3>
                  <p
                    className={
                      task.status === "completed"
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
                  onClick={() =>
                    !task.status === "completed" && updateTask(task)
                  }
                  className={
                    task.status === "completed"
                      ? "ring-2 ring-green-300 dark:ring-green-700 text-green-300 dark:text-green-700 p-1 text-sm rounded-md shadow-md transition duration-100 cursor-default"
                      : "ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300 dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800 cursor-pointer"
                  }
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button
                  onClick={() => handleDelete(task)}
                  className="ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>
          </article>
        ))
        : tasks?.map((task) => (
          <article
            key={task.id}
          >
            <article
              className={
                task.status === "completed"
                  ? "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-green-200 dark:bg-green-900 even:bg-green-200 ring-1 ring-green-400 dark:ring-green-700 line-through decoration-green-800 dark:decoration-green-400"
                  : "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-gray-100 dark:bg-gray-700 even:bg-gray-200 dark:odd:bg-gray-800 border-b border-gray-300 dark:border-gray-600"
              }
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleCompleted(task)}
                  className={
                    task.status === "completed"
                      ? "p-2 rounded-2xl transition-all duration-200 hover:bg-green-300 text-green-500 dark:text-green-400 text-xl"
                      : "p-2 rounded-2xl transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-400 text-xl"
                  }
                >
                  {task.status === "completed" ? (
                    <i className="fa-solid fa-square-check"></i>
                  ) : (
                    <i className="fa-regular fa-square-check"></i>
                  )}
                </button>
                <div className="flex flex-col">
                  <h3
                    className={
                      task.status === "completed"
                        ? "font-medium text-base text-green-700 dark:text-green-400"
                        : "font-medium text-base text-gray-900 dark:text-gray-200"
                    }
                  >
                    {task.title}
                  </h3>
                  <p
                    className={
                      task.status === "completed"
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
                  onClick={() =>
                    task.status === "not_completed" && updateTask(task)
                  }
                  className={
                    task.status === "completed"
                      ? "ring-2 ring-green-300 dark:ring-green-700 text-green-300 dark:text-green-700 p-1 text-sm rounded-md shadow-md transition duration-100 cursor-default"
                      : "ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300 dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800 cursor-pointer"
                  }
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
                <button
                  onClick={() => handleDelete(task)}
                  className="ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </article>
          </article>
        ))}
    </>
  );
};

export default TaskListRender;
