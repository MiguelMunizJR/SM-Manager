import { useId } from "react";
import { defaultUsersValues } from "../defaultValues";

const UsersForm = ({
  register,
  handleSubmit,
  submitUsersData,
  update,
  reset,
  setIsShowUsersForm,
}) => {
  const { firstNameId, lastNameId, emailId, passwordId, birthdayId, activeId } =
    useId();

  const clearUpdate = () => {
    reset(defaultUsersValues);
  };

  const checkKeyPress = (e) => {
    const { keyCode } = e;

    if (keyCode === 13) {
      handleSubmit(submitUsersData);
    } else if (keyCode === 27) {
      setIsShowUsersForm(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitUsersData)}
      onKeyDown={checkKeyPress}
      className="mt-6 mx-4 flex flex-col gap-2 font-default text-sm z-auto"
    >
      <article className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col">
          <label
            htmlFor={firstNameId}
            className="pb-1 font-semibold text-black dark:text-gray-300"
          >
            Firstname: *
          </label>
          <input
            id={firstNameId}
            type="text"
            placeholder="Firstname"
            className="w-72 sm:w-auto h-10 pl-3 rounded bg-slate-100 outline-none text-gray-900 font-medium shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-1 focus:ring-blue-400"
            {...register("firstName")}
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor={lastNameId}
            className="pb-1 font-semibold text-black dark:text-gray-300"
          >
            Lastname: *
          </label>
          <input
            id={lastNameId}
            type="text"
            placeholder="Lastname"
            className="w-72 sm:w-auto h-10 pl-3 rounded bg-slate-100 outline-none text-gray-900 font-medium shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-1 focus:ring-blue-400"
            {...register("lastName")}
            required
          />
        </div>
      </article>
      <div className="flex flex-col">
        <label
          htmlFor={emailId}
          className="pb-1 font-semibold text-black dark:text-gray-300"
        >
          Email: *
        </label>
        <input
          id={emailId}
          type="email"
          placeholder="Email"
          className="h-10 pl-3 rounded bg-slate-100 outline-none text-gray-900 font-medium shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-1 focus:ring-blue-400"
          {...register("email")}
          required
        />
      </div>
      {update ? null : (
        <div className="flex flex-col">
          <label
            htmlFor={passwordId}
            className="pb-1 font-semibold text-black dark:text-gray-300"
          >
            Password: *
          </label>
          <input
            id={passwordId}
            type="password"
            placeholder="Password"
            className="h-10 pl-3 rounded bg-slate-100 outline-none text-gray-900 font-medium shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-1 focus:ring-blue-400"
            {...register("password")}
          />
        </div>
      )}
      <div className="flex flex-col">
        <label
          htmlFor={birthdayId}
          className="pb-1 font-semibold self-center text-black dark:text-gray-300"
        >
          Birthday: *
        </label>
        <input
          id={birthdayId}
          type="date"
          min={"1960-01-01"}
          max={"2023-01-01"}
          className="h-10 w-max mx-auto
          text-center px-4 rounded bg-slate-100 outline-none shadow-sm transition ease-in-out duration-150 hover:shadow-md focus:shadow-md focus:ring-1 focus:ring-blue-400 text-gray-900 font-light"
          {...register("birthday")}
          required
        />
      </div>
      {update && (
        <div className="flex flex-col text-center font-default">
          <label
            htmlFor={activeId}
            className="pb-1 font-semibold self-center text-black  dark:text-gray-300"
          >
            Active:
          </label>
          <div className="mt-1 mx-auto flex gap-4 font-default font-medium text-black dark:text-gray-300">
            <div className="flex gap-2">
              <label htmlFor="active">Active</label>
              <input
                type="radio"
                name="status"
                value="active"
                id={activeId}
                // defaultChecked
                {...register("status")}
              />
            </div>
            <div className="flex gap-2">
              <label htmlFor="not_active">Deactivate</label>
              <input
                type="radio"
                name="status"
                value="not_active"
                id={activeId}
                {...register("status")}
              />
            </div>
          </div>
        </div>
      )}
      <button className="w-3/4 mt-4 mx-auto py-2 flex justify-center items-center gap-3 bg-blue-600 text-gray-100 font-medium rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-blue-700">
        {update ? <h4>Update Client</h4> : <h4>Create Client</h4>}
        <i className="fa-solid fa-user text-sm"></i>
      </button>
      {update && (
        <button
          onClick={clearUpdate}
          className="mx-auto mt-2 py-2 px-4 flex justify-center items-center gap-3 bg-red-400 text-gray-200 text-base rounded drop-shadow-lg transition ease-in-out duration-150 hover:drop-shadow-xl hover:bg-red-500"
        >
          <h4>Clear Fields</h4>
        </button>
      )}
    </form>
  );
};

export default UsersForm;
