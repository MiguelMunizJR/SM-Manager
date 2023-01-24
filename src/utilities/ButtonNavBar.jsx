
const ButtonNavBar = () => {

  return (
    <button
      onClick={() => alert("Show form!")}
      className="w-full h-max py-3 flex justify-center bg-navBarB transition duration-200 cursor-pointer hover:bg-navBarBH active:bg-navBarBA "
    >
      <i className="fa-solid fa-plus text-white text-xl"></i>
    </button>
  );
};

export default ButtonNavBar;
