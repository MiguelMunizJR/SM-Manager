const ButtonNavBar = ({ setIsShowForm, setUpdate }) => {
  const handleClick = () => {
    setIsShowForm(true);
    setUpdate(null);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full h-max py-3 flex justify-center bg-navBarB transition duration-200 cursor-pointer hover:bg-navBarBH active:bg-navBarBA "
    >
      <i className="fa-solid fa-plus text-white text-lg"></i>
    </button>
  );
};

export default ButtonNavBar;
