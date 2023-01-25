const UsersForm = ({ register, handleSubmit, submitData, update }) => {
  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="mt-10 mx-4 flex flex-col gap-4 font-default text-sm"
    >
      <article className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col">
          <label
            htmlFor="firstname"
            className="pb-1 font-semibold text-black dark:text-gray-300"
          >
            Firstname: *
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="Firstname"
            className="w-72 sm:w-auto h-10 pl-3 rounded bg-slate-200 dark:bg-gray-800 dark:placeholder:text-gray-500 outline-none text-gray-900 dark:text-gray-300 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
            {...register("firstName")}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="lastname"
            className="pb-1 font-semibold text-black dark:text-gray-300"
          >
            Lastname: *
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Lastname"
            className="w-72 sm:w-auto h-10 pl-3 rounded bg-slate-200 dark:bg-gray-800 dark:placeholder:text-gray-500 outline-none text-gray-900 dark:text-gray-300 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
            {...register("lastName")}
          />
        </div>
      </article>
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Email: *
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="h-10 pl-3 rounded bg-slate-200 dark:bg-gray-800 dark:placeholder:text-gray-500 outline-none text-gray-900 dark:text-gray-300 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light invalid:ring-1 invalid:ring-red-500"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="password"
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Password: *
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="h-10 pl-3 rounded bg-slate-200 dark:bg-gray-800 dark:placeholder:text-gray-500 outline-none text-gray-900 dark:text-gray-300 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="birthday"
          className="pb-1 font-semibold self-center text-black dark:text-gray-300"
        >
          Birthday: *
        </label>
        <input
          id="birthday"
          type="date"
          min={"1960-01-01"}
          max={"2023-01-01"}
          value={"2000-01-01"}
          className="h-10 w-max mx-auto
          text-center px-4 rounded bg-slate-200 dark:bg-gray-800 dark:text-gray-300 outline-none drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md dark:hover:ring-2 dark:hover:ring-itemsNavDark focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH text-gray-900 font-light"
          {...register("birthday")}
        />
      </div>
      <button className="w-3/4 mt-8 mx-auto py-2 flex justify-center items-center gap-3 bg-navBarBH dark:bg-itemsNavDark text-gray-200 text-base rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-navBarBA dark:hover:bg-itemsNavDarkH">
        {update ? <h4>Update User</h4> : <h4>Create User</h4>}
        <i className="fa-solid fa-user text-sm"></i>
      </button>
    </form>
  );
};

export default UsersForm;
