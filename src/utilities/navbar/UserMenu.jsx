import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const UserMenu = ({ userSession }) => {
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
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-0"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="w-1/2 h-40 absolute right-2 top-12 flex flex-col p-4 bg-gray-50 shadow-xl font-default">
            <Menu.Item disabled>
              <h5 className="text-xs opacity-50">Welcome</h5>
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75">
                {userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1) +
                  " " +
                  userSession?.lastName.charAt(0).toUpperCase() +
                  userSession?.lastName.slice(1)}
              </span>
            </Menu.Item>
            <Menu.Item className="">
              <hr />
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/users/me" className="mx-auto mt-4 text-gray-500 font-medium text-sm">
                My Account
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <button
                className="mt-4 px-8 py-1 rounded-md drop-shadow-md bg-red-500 text-gray-100"
                onClick={handleLogout}
              >
                Log out
              </button>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default UserMenu;
