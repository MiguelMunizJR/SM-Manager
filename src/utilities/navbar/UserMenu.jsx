import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
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
        <Menu.Items className="w-1/2 h-40 absolute right-2 top-12 flex flex-col p-4 bg-gray-50 shadow-xl font-default">
          <motion.menu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Menu.Item disabled>
              <h5 className="text-xs self-start opacity-50">Welcome</h5>
            </Menu.Item>
            <Menu.Item disabled>
              <span className="opacity-75 self-start">
                {userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1) +
                  " " +
                  userSession?.lastName.charAt(0).toUpperCase() +
                  userSession?.lastName.slice(1)}
              </span>
            </Menu.Item>
          </motion.menu>

          <Menu.Item className="">
            <hr />
          </Menu.Item>
          <motion.menu
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Menu.Item>
              <NavLink
                to="/users/me"
                className="mx-auto flex items-center justify-center mt-4 text-gray-800 font-medium text-sm"
              >
                My Account
              </NavLink>
            </Menu.Item>
          </motion.menu>
          <motion.menu
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <Menu.Item>
              <button
                className="mx-auto mt-6 px-6 py-1 flex gap-1 items-center justify-center rounded-sm drop-shadow-md bg-red-500 text-gray-100"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                Log out
              </button>
            </Menu.Item>
          </motion.menu>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default UserMenu;
