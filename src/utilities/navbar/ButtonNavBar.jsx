const ButtonNavBar = ({ setIsShowForm, setUpdate }) => {
  const handleClick = () => {
    setIsShowForm(true);
    setUpdate(null);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-max py-3 flex justify-center text-gray-300 bg-navBarB transition duration-200 cursor-pointer hover:bg-navBarBH dark:hover:bg-itemsNavDarkH active:bg-navBarBA dark:bg-itemsNavDark"
    >
      <i className="fa-solid fa-plus text-lg"></i>
    </button>
  );
};

export default ButtonNavBar;
