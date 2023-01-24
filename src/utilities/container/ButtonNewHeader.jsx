const ButtonNewHeader = ({ setIsShowForm, setIsAnimatedModal }) => {
  const handleClick = () => {
    setIsAnimatedModal(true);
    setIsShowForm(true);
  };

  return (
    <button
      onClick={handleClick}
      className="py-2 px-6 flex gap-2 items-center bg-navBarBH text-gray-300 font-default font-medium text-sm rounded drop-shadow-md transition ease-in-out duration-150 hover:drop-shadow-lg hover:bg-navBarBA"
    >
      <i className="fa-solid fa-plus"></i>
      <h5 className="">Create New User</h5>
    </button>
  );
};

export default ButtonNewHeader;
