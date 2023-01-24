const UsersForm = ({ register, handleSubmit, submitData }) => {
  return (
    <form
      onSubmit={handleSubmit(submitData)}
      className="mt-10 mx-4 flex flex-col gap-4 font-default text-sm"
    >
      <article className="flex gap-4">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="font-semibold text-black">
            Firstname: *
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="Firstname"
            className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
            {...register("firstName")}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastname" className="font-semibold text-black">
            Lastname: *
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Lastname"
            className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
            {...register("lastName")}
          />
        </div>
      </article>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-semibold text-black">
          Email: *
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="font-semibold text-black">
          Password: *
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH placeholder:font-light"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="birthday"
          className="font-semibold self-center text-black"
        >
          Birthday: *
        </label>
        <input
          id="birthday"
          type="date"
          className="h-10 w-max mx-auto pl-3 rounded bg-slate-200 outline-none drop-shadow-sm transition ease-in-out duration-150 hover:drop-shadow-md focus:drop-shadow-md focus:ring-2 focus:ring-itemsNavH text-gray-900 font-light"
          {...register("birthday")}
        />
      </div>
      <button className="w-3/4 mt-8 mx-auto py-2 flex justify-center items-center gap-3 bg-navBarBH text-gray-200 text-base rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-navBarBA">
        <h4>Create User</h4>
        <i className="fa-solid fa-user text-sm"></i>
      </button>
    </form>
  );
};

export default UsersForm;
