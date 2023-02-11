import { defaultTasksValues } from "../defaultValues";

const TasksForm = ({
  register,
  handleSubmit,
  submitTaskData,
  update,
  reset,
  setIsShowTasksForm,
}) => {
  const clearUpdate = () => {
    reset(defaultTasksValues);
  };

  const checkKeyPress = (e) => {
    const { keyCode } = e;

    if (keyCode === 13) {
      handleSubmit(submitTaskData);
    } else if (keyCode === 27) {
      setIsShowTasksForm(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitTaskData)}
      onKeyDown={checkKeyPress}
      className="mt-6 mx-4 flex flex-col gap-2 font-default text-sm z-auto"
    >
      <article className="flex flex-col sm:flex-row gap-4"></article>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Title: *
        </label>
        <input
          id="title"
          type="text"
          placeholder="Title"
          className="w-80 h-10 pl-2 rounded bg-slate-200 dark:bg-gray-800 dark:placeholder:text-gray-500 outline-none text-gray-900 dark:text-gray-300 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
          {...register("title")}
          required
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="description"
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Description:
        </label>
        <textarea
          id="description"
          placeholder="Description"
          className="w-80 h-32 p-2 rounded bg-slate-200 resize-none dark:bg-gray-800 outline-none text-gray-900 dark:text-gray-300 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
          {...register("description")}
        />
      </div>
      <button className="w-2/4 mt-4 mx-auto py-2 flex justify-center items-center gap-3 bg-navBarBH dark:bg-itemsNavDark text-gray-200 text-base rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-navBarBA dark:hover:bg-itemsNavDarkH">
        {update ? <h4>Update Task</h4> : <h4>Create Task</h4>}
        <i className="fa-solid fa-list-check text-sm"></i>
      </button>
      {update && (
        <button
          onClick={clearUpdate}
          className="mx-auto mt-2 py-2 px-4 flex justify-center items-center gap-3 bg-red-400 dark:bg-red-600 text-gray-200 text-base rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-red-500 dark:hover:bg-red-700"
        >
          <h4>Clear Fields</h4>
        </button>
      )}
    </form>
  );
};

export default TasksForm;
