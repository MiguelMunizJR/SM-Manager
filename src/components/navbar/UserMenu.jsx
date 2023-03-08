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
        <Menu.Button className="w-10 rounded-full shadow-md">
          <img
            src="https://i.postimg.cc/xdHGV1kX/7309681.jpg"
            alt="avatar-image"
            className="w-full h-full object-cover rounded-full"
            draggable={false}
          />
        </Menu.Button>
        <Menu.Items className="w-1/2 md:w-2/5 lg:w-1/4 h-48 md:h-60 mt-4 absolute rounded-md right-2 top-12 flex flex-col p-4 bg-gray-50 shadow-xl font-default">
          <motion.menu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Menu.Item disabled>
              <h5 className="text-sm self-start text-gray-500 font-medium">
                Welcome
              </h5>
            </Menu.Item>
            <Menu.Item disabled>
              <span className="text-md self-start text-gray-700 font-semibold">
                {userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1) +
                  " " +
                  userSession?.lastName.charAt(0).toUpperCase() +
                  userSession?.lastName.slice(1)}
              </span>
            </Menu.Item>
          </motion.menu>
          <Menu.Item className="my-2 border-gray-300">
            <hr />
          </Menu.Item>
          <motion.menu
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
          >
            <Menu.Item>
              <NavLink
                to="/users/me"
                className="mx-auto flex items-center justify-center mt-2 text-gray-600 font-medium text-md"
              >
                My Account
              </NavLink>
            </Menu.Item>
          </motion.menu>
          <Menu.Item>
            <button
              className="mx-auto mt-6 px-6 py-1 flex gap-1 items-center justify-center absolute bottom-4 right-4 rounded-sm drop-shadow-md bg-red-400 text-gray-50"
              onClick={handleLogout}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
              Log out
            </button>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
};

export default UserMenu;
