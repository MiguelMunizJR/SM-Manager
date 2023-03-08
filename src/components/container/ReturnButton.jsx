import { NavLink } from "react-router-dom";

const ReturnButton = () => {
  return (
    <NavLink
      to="/"
      className="w-14 h-14 min-h-max py-2 mt-16 mr-5 md:mr-10 lg:mr-16 absolute top-1 right-4 flex justify-center items-center transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200"
    >
      <i className="fa-solid fa-long-arrow-left text-2xl"></i>
    </NavLink>
  );
};

export default ReturnButton;
