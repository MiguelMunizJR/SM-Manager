import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import ButtonNewHeader from "../../utilities/container/ButtonNewHeader";

const HeaderUser = ({ setIsShowForm, setUpdate }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const DarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <section className="mr-5 flex justify-center items-center gap-8">
      <div className="hidden md:flex">
        <ButtonNewHeader setIsShowForm={setIsShowForm} setUpdate={setUpdate} />
      </div>
      <article className="lg:mr-8 flex justify-center items-center gap-4">
        <button
          onClick={DarkModeToggle}
          className="px-4 py-1 rounded-lg shadow-sm text-lg transition ease-in-out duration-150 bg-transparent md:bg-gray-100 md:dark:bg-gray-800 md:hover:bg-gray-100 md:active:ring-2 md:ring-itemsNav dark:hover:bg-itemsNavDark hover:shadow-md dark:hover:shadow-md"
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun text-gray-700 dark:text-gray-300 text-md transition ease-in-out rotate-45 duration-500"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-200 md:text-gray-700 dark:text-gray-300 text-md transition ease-out duration-500"></i>
          )}
        </button>
        <Menu as="div" className="relative z-50 inline-block">
          <div>
            <Menu.Button
              className="px-2 py-1 flex justify-center items-center gap-4 rounded-lg shadow-sm bg-transparent md:bg-gray-100 md:dark:bg-gray-800 md:active:ring-2 md:ring-itemsNav transition ease-in-out duration-150 hover:shadow-md text-gray-500 dark:text-gray-400 dark:hover:bg-itemsNavDark dark:hover:text-gray-200 md:hover:bg-gray-100 dark:hover:shadow-md"
            >
              <div className="flex gap-2 items-center">
                <i className="fa-regular fa-circle-user text-gray-200 dark:text-gray-300 md:text-gray-700 text-xl"></i>
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
            <Menu.Items className="absolute right-0 mt-1 md:mt-3 w-40 origin-top-right divide-y divide-gray-200 dark:divide-gray-700 rounded-md bg-gray-100 dark:bg-gray-800 font-default font-medium shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-navBarBA dark:bg-itemsNavDarkH text-gray-200" : "text-gray-600 dark:text-gray-300"
                    } flex w-full justify-center items-center rounded py-3 text-sm`}
                  >
                    Login
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-navBarBA dark:bg-itemsNavDarkH text-gray-200" : "text-gray-600 dark:text-gray-300"
                    } flex w-full justify-center items-center rounded py-3 text-sm`}
                  >
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

export default HeaderUser;
