import { NavLink } from "react-router-dom";
import itemsNav from "./itemsNav";

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
                ? "w-full py-3 px-8 flex items-center gap-3 cursor-pointer transition-all duration-75 ease-in bg-itemsNav text-lg text-gray-200"
                : "w-full py-2 px-8 flex items-center text-gray-300 font-default text-base font-extralight gap-3 cursor-pointer transition-all duration-75 ease-in hover:bg-itemsNav dark:hover:bg-itemsNavDark"
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
