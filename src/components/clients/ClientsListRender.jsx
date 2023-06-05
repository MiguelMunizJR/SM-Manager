import { toast } from "sonner";
import { deleteClient } from "../../services/clientsServices";

const ClientsListRender = ({
  getAllClients,
  clients,
  filterClients,
  setUpdate,
  setIsShowClientsForm,
  setReload
}) => {
  //* Eliminar cliente
  const handleDelete = (client) => {
    setReload(true);
    deleteClient(client?.id)
      .then(() => {
        getAllClients();
        toast("Client successfully eliminated");
      })
      .catch(() => {
        toast.error("Error when deleting client");
        setReload(false);
      });
  };

  const updateClient = (client) => {
    setUpdate(client);
    setIsShowClientsForm(true);
  };

  return (
    <>
      {filterClients
        ? filterClients?.map((client) => (
          <tr
            key={client.id}
            className="border dark:border dark:border-gray-900 content-center transition duration-75 ease-in-out bg-gray-100 dark:bg-slate-800 dark:text-gray-300 text-gray-800 odd:bg-gray-200 dark:odd:bg-slate-700"
          >
            <td className="flex h-22 items-center gap-2 py-4 pl-4 whitespace-normal text-sm font-normal text-left">
              <div>{client.status === "active" ? "🟢" : "🔴"}</div>
              {client.firstName + " " + client.lastName}
            </td>
            <td
              className="text-sm font-normal text-left py-4
              whitespace-normal break-words"
            >
              {client.email}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {client.firstName}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {client.lastName}
            </td>
            <td className="text-sm font-normal text-center py-4 whitespace-nowrap">
              {client.birthday}
            </td>
            <td className="flex items-center whitespace-nowrap justify-center gap-6">
              <button
                onClick={() => updateClient(client)}
                className="ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300
                  dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => handleDelete(client)}
                className=" ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        ))
        : clients?.map((client) => (
          <tr
            key={client.id}
            className="h-14 border dark:border dark:border-gray-900 place transition duration-75 ease-in-out bg-gray-100 dark:bg-slate-800 dark:text-gray-300 text-gray-700 odd:bg-gray-200 dark:odd:bg-slate-700"
          >
            <td
              className="text-sm font-medium text-left pl-2
            whitespace-normal break-words"
            >
              <div className="flex items-center gap-4">
                <div>{client.status === "active" ? "🟢" : "🔴"}</div>
                <h6>
                  {client.firstName + " " + client.lastName}
                </h6>
              </div>
            </td>
            <td
              className="text-sm font-normal text-left pl-6
            whitespace-normal break-words"
            >
              {client.email}
            </td>
            <td className="text-sm font-normal text-center  whitespace-nowrap">
              {client.firstName}
            </td>
            <td className="text-sm font-normal text-center  whitespace-nowrap">
              {client.lastName}
            </td>
            <td className="text-sm font-normal text-center  whitespace-nowrap">
              {client.birthday}
            </td>
            <td className="whitespace-nowrap justify-center">
              <div className="flex justify-center items-center gap-6">
                <button
                  onClick={() => updateClient(client)}
                  className="ring-2 ring-sky-600 text-sky-600 dark:bg-sky-600 dark:text-gray-300
                dark:hover:bg-sky-700 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-sky-700 hover:ring-sky-700 hover:text-gray-300 active:bg-sky-800 active:ring-sky-800"
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  onClick={() => handleDelete(client)}
                  className="ring-2 ring-red-400 text-red-400 dark:bg-red-500 dark:text-gray-300 dark:ring-red-500 dark:hover:bg-red-600 dark:hover:ring-red-600 p-1 text-sm rounded-md shadow-md transition duration-100 hover:bg-red-500 hover:ring-red-500 hover:text-gray-300 active:bg-red-600 active:ring-red-600"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </td>
          </tr>
        ))}
    </>
  );
};

export default ClientsListRender;
