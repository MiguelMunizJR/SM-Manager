import { toast } from "sonner";
import { deleteClient } from "../../services/clientsServices";


const ClientsCardRender = ({
  clients,
  filterClients,
  getAllClients,
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
          <article
            key={client.id}
          >
            <article
              className={`${
                client.status === "not_active"
                  ? "border-l-red-500"
                  : "border-l-green-500"
              } md:hidden mb-1 py-2 px-4 border-l-8 border-b border-b-gray-300 dark:border-b-gray-700 flex flex-col font-default bg-gray-100 dark:bg-gray-800 odd:bg-slate-100 dark:odd:bg-gray-900`}
            >
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                    {client.firstName + " " + client.lastName}
                  </h4>
                  <p className="text-sm font-ligth text-gray-500 dark:text-gray-400">
                    {client.email}
                  </p>
                </div>
                <div className="flex gap-6">
                  <button
                    onClick={() => updateClient(client)}
                    className="text-sky-700 text-lg"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(client)}
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
                    {client.firstName}
                  </h5>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                        Lastname:
                  </p>
                  <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {client.lastName}
                  </h5>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                        Birthday:
                  </p>
                  <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {client.birthday}
                  </h5>
                </div>
              </div>
            </article>
          </article>
        ))
        : clients?.map((client) => (
          <article
            className={`${
              client.status === "not_active"
                ? "border-l-red-500"
                : "border-l-green-500"
            } md:hidden mb-2 py-2 px-4 border-l-8 border-b border-b-gray-300 dark:border-b-gray-700 flex flex-col font-default bg-gray-200 dark:bg-gray-800 odd:bg-gray-100 dark:odd:bg-gray-900`}
            key={client.id}
          >
            <article>
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                    {client.firstName + " " + client.lastName}
                  </h4>
                  <p className="text-sm font-ligth text-gray-500 dark:text-gray-400">
                    {client.email}
                  </p>
                </div>
                <div className="flex gap-6">
                  <button
                    onClick={() => updateClient(client)}
                    className="text-sky-700 text-lg"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    onClick={() => handleDelete(client)}
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
                    {client.firstName}
                  </h5>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                        Lastname:
                  </p>
                  <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {client.lastName}
                  </h5>
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                        Birthday:
                  </p>
                  <h5 className="text-base font-medium text-gray-800 dark:text-gray-300">
                    {client.birthday}
                  </h5>
                </div>
              </div>
            </article>
          </article>
        ))}
    </>
  );
};

export default ClientsCardRender;
