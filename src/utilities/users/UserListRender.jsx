import axios from "axios";
import { useEffect, useState } from "react";

const UserListRender = ({
  getAllUsers,
  users,
  filterUsers,
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
      {filterUsers
        ? filterUsers?.map((user) => (
          <tr
            key={user.id}
            className="border dark:border dark:border-gray-900 content-center transition duration-75 ease-in-out bg-gray-100 dark:bg-slate-800 dark:text-gray-300 text-gray-800 odd:bg-gray-200 dark:odd:bg-slate-700"
          >
            <td className="flex h-22 items-center gap-2 py-4 pl-4 whitespace-normal text-sm font-normal text-left">
              <div>{user.isActive ? "🟢" : "🔴"}</div>
              {user.firstName + " " + user.lastName}
            </td>
            <td
              className="text-sm font-normal text-left pl-6 py-4
              whitespace-normal break-words"
            >
              {user.email}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {user.firstName}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {user.lastName}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {user.birthday}
            </td>
            <td className="flex items-center whitespace-nowrap justify-center gap-6">
              <button
                onClick={() => updateUser(user)}
                className="ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300
                  dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => deleteUserConfirm(user.id)}
                className=" ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        ))
        : users?.map((user) => (
          <tr
            key={user.id}
            className="border dark:border dark:border-gray-900 content-center transition duration-75 ease-in-out bg-gray-100 dark:bg-slate-800 dark:text-gray-300 text-gray-800 odd:bg-gray-200 dark:odd:bg-slate-700"
          >
            <td className="flex h-22 items-center gap-2 py-4 pl-4 whitespace-normal text-sm font-normal text-left">
              <div>{user.isActive ? "🟢" : "🔴"}</div>
              {user.firstName + " " + user.lastName}
            </td>
            <td
              className="text-sm font-normal text-left pl-6 py-4
            whitespace-normal break-words"
            >
              {user.email}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {user.firstName}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {user.lastName}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {user.birthday}
            </td>
            <td className="flex items-center whitespace-nowrap justify-center gap-6">
              <button
                onClick={() => updateUser(user)}
                className="ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300
                dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => deleteUserConfirm(user.id)}
                className="ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default UserListRender;
