import { useState } from "react";

const exampleTasks = [
  {
    id: 1,
    title: "Buy eggs in Walmart",
    description: "lorem lorem lorem",
    isComplete: false,
  },
  {
    id: 2,
    title: "Take a shower",
    description: "lorem lorem lorem",
    isComplete: false,
  },
  {
    id: 3,
    title: "Clean my clothes",
    description: "lorem lorem lorem",
    isComplete: false,
  },
  {
    id: 4,
    title: "Buy 2 milks in Walmart",
    description: "lorem lorem lorem",
    isComplete: false,
  },
];

const TaskListRender = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      {exampleTasks?.map((task) => (
        <article
          key={task.id}
          className={
            isCompleted
              ? "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-green-200 dark:bg-green-900 even:bg-green-200 ring-1 ring-green-400 dark:ring-green-700 line-through decoration-green-800 dark:decoration-green-400"
              : "w-full min-h-full py-4 px-3 md:px-6 flex justify-between items-center font-default bg-gray-100 dark:bg-gray-700 even:bg-gray-200 dark:odd:bg-gray-800 border-b border-gray-300 dark:border-gray-600"
          }
        >
          <div className="flex items-center gap-4">
            <button
              onClick={handleCompleted}
              className={
                isCompleted
                  ? "p-2 rounded-2xl transition-all duration-200 hover:bg-green-300 text-green-500 dark:text-green-400 text-xl"
                  : "p-2 rounded-2xl transition-all duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-400 text-xl"
              }
            >
              {isCompleted ? (
                <i className="fa-solid fa-square-check"></i>
              ) : (
                <i className="fa-regular fa-square-check"></i>
              )}
            </button>
            <div className="flex flex-col">
              <h3
                className={
                  isCompleted
                    ? "font-medium text-base text-green-700 dark:text-green-400"
                    : "font-medium text-base text-gray-900 dark:text-gray-200"
                }
              >
                {task.title}
              </h3>
              <p
                className={
                  isCompleted
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
              className={
                isCompleted
                  ? "ring-2 ring-green-300 dark:ring-green-700 text-green-300 dark:text-green-700 p-1 text-sm rounded-md shadow-md transition duration-100 cursor-default"
                  : "ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300 dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800 cursor-pointer"
              }
            >
              <i className="fa-solid fa-pen"></i>
            </button>
            <button
              className={
                isCompleted
                  ? "ring-2 ring-green-300 dark:ring-green-700 text-green-300 dark:text-green-700 p-1 text-sm rounded-md shadow-md transition duration-100 cursor-default"
                  : "ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
              }
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </article>
      ))}
    </>
  );
};

export default TaskListRender;
