const ButtonNewHeader = ({ setIsShowForm, setIsAnimatedModal, setUpdate }) => {
  const handleClick = () => {
    setIsAnimatedModal(true);
    setIsShowForm(true);
    setUpdate(null);
  };

  return (
    <button
      onClick={handleClick}
      className="py-2 px-6 flex gap-2 items-center bg-navBarBH dark:bg-itemsNavDark dark:text-gray-300 text-gray-300 font-default font-medium text-sm rounded shadow-md dark:shadow-gray-900 transition ease-in-out duration-150 hover:shadow-lg dark:hover:shadow-lg hover:bg-navBarBA dark:hover:bg-itemsNavDarkH"
    >
      <i className="fa-solid fa-plus"></i>
      <h5 className="">Create New User</h5>
    </button>
  );
};

export default ButtonNewHeader;
