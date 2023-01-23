const ButtonNew = () => {

  const handleClick = () => {
    alert("Open Form!");
  };

  return (
    <article onClick={handleClick} className="w-full h-max py-3 flex justify-center bg-navBarB cursor-pointer hover:bg-navBarBH active:bg-navBarBA ">
      <i className="fa-solid fa-plus text-white text-xl"></i>
    </article>
  );
};

export default ButtonNew;
