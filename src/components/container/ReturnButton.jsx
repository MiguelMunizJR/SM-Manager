import { NavLink } from "react-router-dom";

const ReturnButton = () => {
  return (
    <NavLink
      to="/"
      className="w-14 h-14 min-h-max py-2 mt-16 md:mr-8 lg:mr-10 absolute top-1 right-2 flex justify-center items-center transition-all duration-300 text-gray-800 rounded-full cursor-pointer hover:bg-gray-200"
    >
      <i className="fa-solid fa-long-arrow-left text-2xl"></i>
    </NavLink>
  );
};

export default ReturnButton;
