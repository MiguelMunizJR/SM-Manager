const SearchBar = ({
  activePage,
  setFilterUsers,
  setFilterTasks,
  users,
  tasks,
}) => {
  const handleInput = (e) => {
    const value = e.target.value;

    if (activePage === "/users") {

      const filterUsers = users?.filter((user) => {
        if (e.target.value === "") return users;
        return user?.firstName.toLowerCase().includes(value.toLowerCase());
      });
      setFilterUsers(filterUsers);
    } else if (activePage === "/tasks") {

      const filterTasks = tasks?.filter((task) => {
        if (e.target.value === "") return tasks;
        return task?.title.toLowerCase().includes(value.toLowerCase());
      });
      setFilterTasks(filterTasks);
    }
  };

  return (
    <article className="mt-5 flex justify-center items-center mx-auto w-5/6">
      <span className="absolute left-10">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="flex w-8 text-gray-500"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        type="search"
        id="search"
        onChange={handleInput}
        placeholder={
          activePage === "/users"
            ? "Search Users"
            : "Search Tasks"
        }
        className="w-full h-12 pl-12 rounded outline-none shadow-sm focus:ring-1 focus:ring-blue-400 bg-gray-100"
      />
    </article>
  );
};

export default SearchBar;
