import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import ButtonHeader from "../../utilities/container/ButtonHeader";

const Header = ({
  setIsShowUsersForm,
  setIsShowTasksForm,
  setUpdate,
  activePage,
}) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const DarkModeToggle = () => {
  //   setIsDarkMode(!isDarkMode);
  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <section className="mr-5 flex justify-center items-center gap-8">
      <div className="hidden md:flex">
        <ButtonHeader
          setIsShowUsersForm={setIsShowUsersForm}
          setIsShowTasksForm={setIsShowTasksForm}
          setUpdate={setUpdate}
          activePage={activePage}
        />
      </div>
      <article className="lg:mr-8 flex justify-center items-center gap-2">
        {/* DARK MODE */}
        {/* <button
          onClick={DarkModeToggle}
          className="p-2 drop-shadow-sm text-lg transition ease-in-out duration-150 bg-transparent"
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun text-gray-700 dark:text-gray-600 text-md transition ease-in-out rotate-45 duration-500"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-600 md:text-gray-700 dark:text-gray-300 text-md transition ease-out duration-500"></i>
          )}
        </button> */}
        <Menu as="div" className="relative z-10 inline-block">
          <div>
            <Menu.Button className="p-2 flex justify-center items-center gap-4 drop-shadow-sm bg-transparent transition ease-in-out duration-150 text-gray-600">
              <div className="flex gap-2 items-center">
                <i className="fa-regular fa-circle-user text-gray-700 text-2xl"></i>
              </div>
            </Menu.Button>
          </div>
          <Transition
            as="div"
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-1 md:mt-3 w-40 origin-top-right rounded bg-gray-100 dark:bg-gray-800 font-default font-medium shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-navBarBA dark:bg-itemsNavDarkH text-gray-200"
                        : "text-gray-600 dark:text-gray-300"
                    } flex w-full justify-center gap-2 items-center rounded py-3 text-sm`}
                  >
                    <i className="fa-solid fa-right-to-bracket"></i>
                    Login
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active
                        ? "bg-navBarBA dark:bg-itemsNavDarkH text-gray-200"
                        : "text-gray-600 dark:text-gray-300"
                    } flex w-full gap-2 justify-center items-center rounded py-3 text-sm`}
                  >
                    <i className="fa-solid fa-key"></i>
                    Sign up
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </article>
    </section>
  );
};

export default Header;
