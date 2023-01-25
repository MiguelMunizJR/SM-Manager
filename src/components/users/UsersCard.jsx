import { useState } from "react";
import UserListRender from "../../utilities/users/UserListRender";

const UsersCard = ({
  getAllUsers,
  users,
  setUpdate,
  setIsShowForm,
  isLoading,
}) => {
  const [isSort, setIsSort] = useState(false);
  const [reload, setReload] = useState(false);

  const setSort = () => {
    setIsSort(!isSort);
  };

  const reloadUsers = () => {
    getAllUsers();
    setReload(true);
  };

  const usersReady = () => {
    if (users) {
      setReload(false);
    }
    setReload(false);
  };

  return (
    <section className="w-11/12 h-4/6 mb-10 mx-auto flex flex-col justify-center gap-6">
      <article className="w-full flex justify-between items-center">
        <div className="flex items-center text-gray-900 dark:text-gray-300">
          <h2 className="font-default text-2xl font-normal">Users</h2>
          <i className="fa-solid fa-users pl-2 text-md"></i>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button
            className="bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-lg px-3 py-1 text-md shadow-md transition ease-in-out duration-150 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black active:ring-2 active:ring-itemsNavH"
            onClick={reloadUsers}
            onAnimationEnd={usersReady}
          >
            <i
              className={`${reload && "animate-reload"} fa-solid fa-rotate`}
            ></i>
          </button>
          <button
            onClick={setSort}
            className="mr-12 bg-gray-100 dark:bg-gray-800 dark:text-gray-300  rounded-lg px-3 py-1 text-md shadow-md transition ease-in-out duration-150 hover:shadow-lg dark:hover:shadow-lg dark:hover:shadow-black active:ring-2 active:ring-itemsNavH"
          >
            {isSort ? (
              <i className="fa-solid fa-arrow-up-short-wide"></i>
            ) : (
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            )}
          </button>
        </div>
      </article>
      {/* Users Card */}
      <article className="w-full h-5/6 bg-gray-100 dark:bg-gray-800 drop-shadow-md dark:drop-shadow-lg dark:shadow-black rounded-md overflow-y-auto">
        {reload || isLoading ? (
          <div className="w-full h-full flex flex-col justify-center items-center text-neutral-400 dark:text-gray-600 animate-pulse">
            <i className="fa-solid fa-bars-progress text-8xl"></i>
            <h2 className="font-default text-2xl ">Loading Data ...</h2>
          </div>
        ) : (
          <table className="table-fixed w-full text-center">
            <thead>
              {/* Refactorizar los headers con un componente map */}
              <tr>
                <th className="text-sm font-medium text-slate-400 py-3">
                  Name
                </th>
                <th className="text-sm font-medium text-slate-400 py-3">
                  Email
                </th>
                <th className="text-sm font-medium text-slate-400 py-3">
                  Firstname
                </th>
                <th className="text-sm font-medium text-slate-400 py-3">
                  Lastname
                </th>
                <th className="text-sm font-medium text-slate-400 py-3">
                  Birthday
                </th>
                <th className="text-sm font-medium text-slate-400 py-3">
                  Edit / Delete
                </th>
              </tr>
            </thead>
            <tbody>
              <UserListRender
                getAllUsers={getAllUsers}
                users={users}
                setUpdate={setUpdate}
                setIsShowForm={setIsShowForm}
              />
            </tbody>
          </table>
        )}
      </article>
    </section>
  );
};

export default UsersCard;
