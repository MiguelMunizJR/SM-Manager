const Form = ({ setIsShowForm }) => {
  const handleSubmit = (e) => {
    console.log(e.target);
  };

  return (
    <section className="w-max my-10 mx-auto rounded-md bg-gray-100 flex flex-col items-center drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <header className="w-full flex self-start justify-between items-center">
        <div className="mt-6 ml-4 flex items-center gap-2">
          <h3 className="font-default text-2xl text-gray-900 font-medium">
            Create User
          </h3>
          <i className="fa-solid fa-user"></i>
        </div>
        <button
          onClick={() => setIsShowForm(false)}
          className="mr-4 flex justify-center items-center text-2xl"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </header>
      <form
        onSubmit={handleSubmit}
        className="mt-10 mx-6 flex flex-col gap-6 font-default"
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
              className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium placeholder:font-light"
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
              className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium placeholder:font-light"
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
            className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium placeholder:font-light"
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
            className="h-10 pl-3 rounded bg-slate-200 outline-none text-gray-900 font-medium placeholder:font-light"
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
            className="h-10 w-max mx-auto pl-3 rounded bg-slate-200 outline-none text-gray-900 font-light"
          />
        </div>
        <button className="py-2 flex justify-center items-center gap-3 bg-red-200 text-gray-200 text-lg rounded shadow-md cursor-default">
          <h4>Clear</h4>
          <i className="fa-solid fa-user text-sm"></i>
        </button>
        <button className="py-2 flex justify-center items-center gap-3 bg-navBarB text-gray-200 text-lg rounded shadow-md">
          <h4>Create User</h4>
          <i className="fa-solid fa-user text-sm"></i>
        </button>
      </form>
    </section>
  );
};

export default Form;
