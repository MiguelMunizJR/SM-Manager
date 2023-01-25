import axios from "axios";
import React from "react";

const UsersCardsRender = ({ users, getAllUsers, setUpdate, setIsShowForm }) => {
  const deleteUser = (id) => {
    // Confirmation modal coming soon...
    const URL = `https://crud-api-express.onrender.com/api/v1/users/${id}/`;

    axios
      .delete(URL)
      .then(() => {
        console.log(`User with ID: ${id}, deleted succesfully!`);
        getAllUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateUser = (user) => {
    setUpdate(user);
    setIsShowForm(true);
  };

  return (
    <>
      {users?.map((user) => (
        <article
          key={user.id}
          className={`${
            user.isActive ? "border-l-green-500" : "border-l-red-500"
          } md:hidden mb-1 py-2 px-4 border-l-8 border-l-green-500 border-b border-b-gray-300 dark:border-b-gray-700 flex flex-col font-default bg-gray-100 dark:bg-gray-800 odd:bg-slate-200 dark:odd:bg-gray-900`}
        >
          <div className="w-full flex justify-between">
            <div className="flex flex-col">
              <h4 className="text-xl font-medium text-gray-800 dark:text-gray-300">
                {user.firstName + " " + user.lastName}
              </h4>
              <p className="text-sm font-ligth text-gray-500 dark:text-gray-400">
                {user.email}
              </p>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => updateUser(user)}
                className="text-sky-700 text-lg"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => deleteUser(user.id)}
                className="text-red-500 text-lg"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className="w-full mt-4 flex items-center justify-between text-center text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400">Firstname:</p>
              <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                {user.firstName}
              </h5>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Lastname:</p>
              <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                {user.lastName}
              </h5>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400">Birthday:</p>
              <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                {user.birthday}
              </h5>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default UsersCardsRender;
