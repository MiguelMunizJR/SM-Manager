import { useLocation } from "react-router-dom";
import { ROUTES_PATH } from "../../consts";

const SearchBar = ({
  setFilterClients,
  setFilterTasks,
  clients,
  tasks,
}) => {
  const activePage = useLocation().pathname;

  const handleInput = (e) => {
    const value = e.target.value;

    if (activePage === ROUTES_PATH.CLIENTS) {
      const filterClients = clients?.filter((client) => {
        if (e.target.value === "") return clients;
        return client?.firstName.toLowerCase().includes(value.toLowerCase());
      });

      setFilterClients(filterClients);

    } else if (activePage === ROUTES_PATH.TASKS) {
      const filterTasks = tasks?.filter((task) => {
        if (e.target.value === "") return tasks;
        return task?.title.toLowerCase().includes(value.toLowerCase());
      });
      
      setFilterTasks(filterTasks);
    }
  };

  return (
    <article className="my-6 flex items-center drop-shadow-sm mx-auto">
      <span className="w-max pl-1 absolute flex items-center">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="flex w-9 text-gray-500"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        type="search"
        id="search"
        onChange={handleInput}
        placeholder={
          activePage === ROUTES_PATH.CLIENTS
            ? "Search Clients"
            : "Search Tasks"
        }
        className="w-full h-12 pl-12 rounded outline-none shadow-sm focus:ring-1 focus:ring-blue-400 bg-slate-200"
      />
    </article>
  );
};

export default SearchBar;
