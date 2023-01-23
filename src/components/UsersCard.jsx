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
    <section className="w-5/6 h-4/6 mb-10 flex flex-col justify-center gap-6">
      <div className="flex items-center">
        <h2 className="font-default text-3xl font-normal">Users</h2>
        <i className="fa-solid fa-users pl-2 text-md"></i>
      </div>
      <article className="w-full h-5/6 bg-gray-100 drop-shadow-md rounded-md">
        <table className="table-auto w-5/6 text-center">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                className="border-b transition duration-300 ease-in-out hover:bg-gray-200 cursor-pointer"
              >
                <td className="flex gap-4 py-5 pl-4 whitespace-nowrap text-sm font-medium text-left text-gray-800">
                  <div>
                    {
                      user.isActive ? "🟢" : "🔴"
                    }
                  </div>
                  {user.firstName + " " + user.lastName}
                </td>
                <td className="text-sm text-gray-800 font-medium text-left px-12 py-4 whitespace-nowrap">
                  {user.email}
                </td>
                <td className="text-sm text-gray-800 font-medium text-left px-12 py-4 whitespace-nowrap">
                  {user.firstName}
                </td>
                <td className="text-sm text-gray-800 font-medium text-left px-12 py-4 whitespace-nowrap">
                  {user.lastName}
                </td>
                <td className="text-sm text-gray-800 font-medium text-left px-12 py-4 whitespace-nowrap">
                  {user.birthday}
                </td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default UsersCard;
