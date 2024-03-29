import { useId } from "react";
import { defaultTasksValues } from "../../utilities/defaultValues";

const TasksForm = ({
  register,
  handleSubmit,
  submitTaskData,
  update,
  reset,
  setIsShowTasksForm,
}) => {
  const { titleId, descriptionId } = useId();

  //* Cerramos el formulario si el usuario ha presionado la tecla "ESC"
  const checkKeyPress = (e) => {
    const { keyCode } = e;

    if (keyCode === 27) {
      setIsShowTasksForm(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitTaskData)}
      onKeyDown={checkKeyPress}
      className="mt-6 mx-4 flex flex-col gap-2 font-default text-sm z-40"
    >
      <article className="flex flex-col sm:flex-row gap-4"></article>
      <div className="flex flex-col">
        <label
          htmlFor={titleId}
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Title: *
        </label>
        <input
          id={titleId}
          type="text"
          placeholder="Title"
          className="w-80 sm:w-auto h-10 pl-3 rounded bg-slate-100 outline-none text-gray-900 font-medium shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-2 focus:ring-blue-400"
          {...register("title")}
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor={descriptionId}
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Description:
        </label>
        <textarea
          id={descriptionId}
          placeholder="Description"
          className="w-80 h-32 p-2 rounded bg-slate-100 resize-none outline-none text-gray-900 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-2 focus:ring-blue-400"
          {...register("description")}
        />
      </div>
      <button className="w-3/4 mt-4 mx-auto py-2 flex justify-center items-center gap-3 bg-blue-600 text-gray-100 font-medium rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-blue-700">
        {update ? <h4>Update Task</h4> : <h4>Create Task</h4>}
        <i className="fa-solid fa-list-check text-sm"></i>
      </button>
      {update && (
        <button
          onClick={() => reset(defaultTasksValues)}
          className="mx-auto mt-2 py-2 px-4 flex justify-center items-center gap-3 bg-red-400 dark:bg-red-600 text-gray-200 text-base rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-red-500 dark:hover:bg-red-700"
        >
          <h4>Clear Fields</h4>
        </button>
      )}
    </form>
  );
};

export default TasksForm;
