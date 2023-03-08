const ButtonHeader = ({
  setIsShowUsersForm,
  setIsShowTasksForm,
  setUpdate,
  activePage,
}) => {
  const handleClick = () => {
    if (activePage === "/clients") {
      setIsShowUsersForm(true);
    } else if (activePage === "/tasks") {
      setIsShowTasksForm(true);
    }
    setUpdate(null);
  };

  return (
    <button
      onClick={handleClick}
      className="flex px-3 py-2 gap-2 items-center bg-blue-700 hover:bg-blue-800 text-gray-100 font-default font-medium text-sm rounded shadow-md transition ease-in-out duration-150 hover:shadow-lg"
    >
      <i className="fa-solid fa-plus"></i>
      <h5>{activePage === "/clients" ? "New Client" : "New Task"}</h5>
    </button>
  );
};

export default ButtonHeader;
