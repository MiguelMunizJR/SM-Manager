const ButtonMobile = ({
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
      className="w-14 h-14 rounded-full fixed bottom-5 right-7 drop-shadow-xl bg-blue-600 active:bg-blue-700 active:drop-shadow-2xl hover:bg-blue-700 hover:drop-shadow-2xl text-gray-50 z-30"
    >
      <i className="fa-solid fa-plus text-xl"></i>
    </button>
  );
};

export default ButtonMobile;
