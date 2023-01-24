const UserListRender = ({ users }) => {
  return (
    <>
      {users?.map((user) => (
        <tr
          key={user.id}
          className="border-b transition duration-75 ease-in-out bg-gray-100 odd:bg-gray-200"
        >
          <td className="flex gap-2 py-4 pl-4 whitespace-normal text-sm font-normal text-left text-gray-800">
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
          <td className="flex justify-center gap-6">
            <button>
              <i className="fa-solid fa-pen-to-square ring-2 ring-sky-600 text-sky-600 p-1 text-sm rounded-md shadow-md shadow-neutral-300 transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800"></i>
            </button>
            <button>
              <i className="fa-solid fa-trash-can ring-2 ring-red-400 text-red-400 p-1 text-sm rounded-md shadow-md shadow-neutral-300 transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"></i>
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserListRender;
