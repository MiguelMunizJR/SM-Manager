import axios from "axios";

const UserListRender = ({ getAllUsers, users }) => {
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

  return (
    <>
      {users?.map((user) => (
        <tr
          key={user.id}
          className="border-b content-center transition duration-75 ease-in-out bg-gray-100 odd:bg-gray-200"
        >
          <td className="flex h-22 items-center gap-2 py-4 pl-4 whitespace-normal text-sm font-normal text-left text-gray-800">
            <div>{user.isActive ? "🟢" : "🔴"}</div>
            {user.firstName + " " + user.lastName}
          </td>
          <td className="text-sm text-gray-800 font-normal break-words text-left pl-6 py-4 flex-wrap">
            {user.email}
          </td>
          <td className="text-sm text-gray-800 font-normal text-center py-4 whitespace-nowrap">
            {user.firstName}
          </td>
          <td className="text-sm text-gray-800 font-normal text-center py-4 whitespace-nowrap">
            {user.lastName}
          </td>
          <td className="text-sm text-gray-800 font-normal text-center py-4 whitespace-nowrap">
            {user.birthday}
          </td>
          <td className="flex h-10 items-center whitespace-nowrap justify-center gap-6">
            <button className="ring-2 ring-sky-600 text-sky-600 p-1 text-sm rounded-md shadow-md shadow-neutral-300 transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              onClick={() => deleteUser(user.id)}
              className=" ring-2 ring-red-400 text-red-400 p-1 text-sm rounded-md shadow-md shadow-neutral-300 transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
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
