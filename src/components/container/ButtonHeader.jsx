import { useLocation } from "react-router-dom";
import { ROUTES_PATH } from "../../consts";

const ButtonHeader = ({
  setIsShowClientsForm,
  setIsShowTasksForm,
  setUpdate,
}) => {
  const activePage = useLocation().pathname;

  const handleClick = () => {
    if (activePage === ROUTES_PATH.CLIENTS) {
      setIsShowClientsForm(true);
    } else if (activePage === ROUTES_PATH.TASKS) {
      setIsShowTasksForm(true);
    }
    setUpdate(null);
  };

  return (
    <button
      onClick={handleClick}
      className="flex px-3 md:px-5 py-2 gap-2 items-center bg-blue-700 hover:bg-blue-800 text-gray-100 font-default font-medium text-sm rounded shadow-md transition ease-in-out duration-150 hover:shadow-lg"
    >
      <i className="fa-solid fa-plus"></i>
      <h5>{activePage === ROUTES_PATH.CLIENTS ? "New Client" : "New Task"}</h5>
    </button>
  );
};

export default ButtonHeader;
