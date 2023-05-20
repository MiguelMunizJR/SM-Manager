import { toast } from "sonner";
import { createNewClient, deleteClient } from "../../services/clientsServices";

const ClientsListRender = ({
  getAllClients,
  clients,
  filterClients,
  setUpdate,
  setIsShowClientsForm,
}) => {

  //* Eliminar cliente
  const handleDelete = (client) => {
    deleteClient(client?.id)
      .then(() => {
        getAllClients();
        toast("Client successfully eliminated", {
          action: {
            label: "Undo",
            onClick: async () => {
              await createNewClient({
                firstName: client?.firstName,
                lastName: client?.lastName,
                // Edit the model for remove password
                email: client?.email,
                password: client?.password,
                birthday: client?.birthday,
                status: client?.status
              });
              getAllClients();
            }
          },
        });
      })
      .catch(() => {
        toast.error("Error when deleting client");
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
              <div>
                {client.status === "active"
                  ? "🟢"
                  : client.status === "not_active"
                    ? "🔴"
                    : null}
              </div>
              {client.firstName + " " + client.lastName}
            </td>
            <td
              className="text-sm font-normal text-left pl-6 py-4
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
            className="border dark:border dark:border-gray-900 content-center transition duration-75 ease-in-out bg-gray-100 dark:bg-slate-800 dark:text-gray-300 text-gray-800 odd:bg-gray-200 dark:odd:bg-slate-700"
          >
            <td className="flex h-22 items-center gap-2 py-4 pl-4 whitespace-normal text-sm font-normal text-left">
              <div>
                {client.status === "active"
                  ? "🟢"
                  : client.status === "not_active"
                    ? "🔴"
                    : null}
              </div>
              {client.firstName + " " + client.lastName}
            </td>
            <td
              className="text-sm font-normal text-left pl-6 py-4
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

export default ClientsListRender;
