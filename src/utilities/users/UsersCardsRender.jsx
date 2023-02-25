import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const UsersCardsRender = ({
  users,
  filterUsers,
  getAllUsers,
  setUpdate,
  setIsShowUsersForm,
  setShowDelete,
  isDelete,
  setIsDelete,
}) => {
  const [idUser, setIdUser] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    isDelete && deleteUserConfirm();
  }, [isDelete]);

  const deleteUserConfirm = (id) => {
    setIdUser(id);
    if (isDelete) {
      deleteUser(idUser);
    } else {
      setShowDelete(true);
    }
  };

  const deleteUser = (id) => {
    const URL = `https://crud-api-express.onrender.com/api/v1/clients/${id}/`;

    axios
      .delete(URL, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(() => {
        // console.log(`User with ID: ${id}, deleted succesfully!`);
        getAllUsers();
        setIsDelete(false);
        setShowDelete(false);
        setIdUser(null);
      })
      .catch((err) => {
        console.log(err);
        setIsDelete(false);
        setShowDelete(false);
        setIdUser(null);
      });
  };

  const updateUser = (user) => {
    setUpdate(user);
    setIsShowUsersForm(true);
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0, translateY: -30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >
        {filterUsers
          ? filterUsers?.map((user, i) => (
            <motion.article
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.3,
                delay: i - 0.2,
              }}
              key={user.id}
            >
              <article
                className={`${
                  user.status === "not_active"
                    ? "border-l-red-500"
                    : "border-l-green-500"
                } md:hidden mb-1 py-2 px-4 border-l-8 border-b border-b-gray-300 dark:border-b-gray-700 flex flex-col font-default bg-gray-100 dark:bg-gray-800 odd:bg-slate-200 dark:odd:bg-gray-900`}
              >
                <div className="w-full flex justify-between">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
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
                      onClick={() => deleteUserConfirm(user.id)}
                      className="text-red-500 text-lg"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
                <div className="w-full mt-4 flex items-center justify-between text-center text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Firstname:
                    </p>
                    <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {user.firstName}
                    </h5>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Lastname:
                    </p>
                    <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {user.lastName}
                    </h5>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Birthday:
                    </p>
                    <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {user.birthday}
                    </h5>
                  </div>
                </div>
              </article>
            </motion.article>
          ))
          : users?.map((user, i) => (
            <motion.article
              initial={{ opacity: 0, translateY: -30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.3,
                delay: i - 0.2,
              }}
              key={user.id}
            >
              <article
                className={`${
                  user.status === "not_active"
                    ? "border-l-red-500"
                    : "border-l-green-500"
                } md:hidden mb-1 py-2 px-4 border-l-8 border-b border-b-gray-300 dark:border-b-gray-700 flex flex-col font-default bg-gray-100 dark:bg-gray-800 odd:bg-slate-200 dark:odd:bg-gray-900`}
              >
                <div className="w-full flex justify-between">
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
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
                      onClick={() => deleteUserConfirm(user.id)}
                      className="text-red-500 text-lg"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                </div>
                <div className="w-full mt-4 flex items-center justify-between text-center text-sm">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Firstname:
                    </p>
                    <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {user.firstName}
                    </h5>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Lastname:
                    </p>
                    <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {user.lastName}
                    </h5>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400">
                        Birthday:
                    </p>
                    <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                      {user.birthday}
                    </h5>
                  </div>
                </div>
              </article>
            </motion.article>
          ))}
      </motion.article>
    </>
  );
};

export default UsersCardsRender;
