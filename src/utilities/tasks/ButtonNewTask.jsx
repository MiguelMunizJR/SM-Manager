const ButtonNewTask = ({ setIsShowTasksForm, setUpdate }) => {
  
  const handleClick = () => {
    setIsShowTasksForm(true);
    setUpdate(null);
  };

  return (
    <button
      onClick={handleClick}
      className="sm:px-6 md:px-6 lg:px-8 flex p-2 gap-2 items-center bg-navBarBH dark:bg-itemsNavDark dark:text-gray-300 text-gray-300 font-default font-medium text-sm rounded shadow-md dark:shadow-gray-900 transition ease-in-out duration-150 hover:shadow-lg dark:hover:shadow-lg hover:bg-navBarBA dark:hover:bg-itemsNavDarkH"
    >
      <i className="fa-solid fa-plus"></i>
      <h5 className="">New Task</h5>
    </button>
  );
};

export default ButtonNewTask;
