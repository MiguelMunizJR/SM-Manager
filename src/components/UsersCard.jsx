import { useEffect, useState } from "react";
import axios from "axios";

const UsersCard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    const URL = "https://crud-api-express.onrender.com/api/v1/users";

    axios
      .get(URL)
      .then((res) => {
        setUsers(res.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(users);

  return (
    <section className="w-5/6 h-4/6 mb-10 mx-auto flex flex-col justify-center gap-6">
      <article className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="font-default text-3xl font-normal">Users</h2>
          <i className="fa-solid fa-users pl-2 text-md"></i>
        </div>
        <button className="mr-10 bg-gray-100 rounded-lg px-4 py-1 text-lg shadow-md shadow-gray-300 transition ease-in-out duration-100 hover:shadow-xl">
          <i className="fa-solid fa-arrow-down-short-wide"></i>
        </button>
      </article>
      <article className="w-full h-5/6 bg-gray-100 drop-shadow-md rounded-md">
        <table className="table-fixed w-full text-center">
          <thead>
            <tr>
              <th className="text-md font-medium text-slate-400 py-3">Name</th>
              <th className="text-md font-medium text-slate-400 py-3">Email</th>
              <th className="text-md font-medium text-slate-400 py-3">
                Firstname
              </th>
              <th className="text-md font-medium text-slate-400 py-3">
                Lastname
              </th>
              <th className="text-md font-medium text-slate-400 py-3">
                Birthday
              </th>
              <th className="text-md font-medium text-slate-400 py-3">
                Edit / Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className="border-b transition duration-75 ease-in-out hover:bg-gray-200"
              >
                <td className="flex gap-2 py-5 pl-4 whitespace-normal text-sm font-medium text-left text-gray-800">
                  <div>{user.isActive ? "🟢" : "🔴"}</div>
                  {user.firstName + " " + user.lastName}
                </td>
                <td className="text-sm text-gray-800 font-medium break-words text-left pl-6 py-4 flex-wrap">
                  {user.email}
                </td>
                <td className="text-sm text-gray-800 font-medium text-center py-4 whitespace-nowrap">
                  {user.firstName}
                </td>
                <td className="text-sm text-gray-800 font-medium text-center py-4 whitespace-nowrap">
                  {user.lastName}
                </td>
                <td className="text-sm text-gray-800 font-medium text-center py-4 whitespace-nowrap">
                  {user.birthday}
                </td>
                <td className="flex justify-evenly">
                  <button>
                    <i className="fa-solid fa-pen-to-square ring-2 ring-sky-600 text-sky-600 p-2 rounded-md shadow-md shadow-neutral-300 transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-trash-can ring-2 ring-red-400 text-red-400 p-2 rounded-md shadow-md shadow-neutral-300 transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default UsersCard;
