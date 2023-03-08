import { NavLink } from "react-router-dom";
import itemsNav from "../../utilities/navbar/itemsNav";

const ListNav = () => {
  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col list-none">
        {itemsNav?.map((item) => (
          <NavLink
            key={item.id}
            to={item.route}
            className={({ isActive }) =>
              isActive
                ? "w-full py-5 px-6 flex items-center gap-3 cursor-pointer transition-all duration-75 ease-in bg-blue-700 text-lg text-gray-50"
                : "w-full py-5 px-6 flex items-center text-gray-600 font-default text-base font-normal gap-3 cursor-pointer transition-all duration-75 ease-in hover:bg-gray-300"
            }
          >
            <i className={item.icon}></i>
            <h4>{item.title}</h4>
          </NavLink>
        ))}
      </ul>
    </section>
  );
};

export default ListNav;
