import { Menu } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const UserMenu = () => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <Menu>
        <Menu.Button className="text-gray-600 text-2xl hover:drop-shadow-sm">
          <i className="fa-regular fa-circle-user"></i>
        </Menu.Button>
        <Menu.Items className="w-1/2 h-40 absolute right-2 top-12 flex flex-col p-4 bg-gray-50 shadow-xl font-default">
          <Menu.Item disabled>
            <h5 className="text-xs opacity-50">Welcome</h5>
          </Menu.Item>
          <Menu.Item disabled>
            <h3 className="opacity-75">Name</h3>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/users/me" className="mx-auto mt-2">
                My Account
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <button
              className="mt-4 px-8 py-1 rounded-md drop-shadow-md font-medium bg-red-500 text-gray-100"
              onClick={handleLogout}
            >
              Log out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default UserMenu;
