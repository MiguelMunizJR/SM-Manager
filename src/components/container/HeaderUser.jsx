import { useState } from "react";
import ButtonNewHeader from "../../utilities/container/ButtonNewHeader";

const HeaderUser = ({ setIsShowForm, setUpdate }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const DarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const userMenuToggle = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <section className="mr-5 flex justify-center items-center gap-8">
      <div className="hidden md:flex">
        <ButtonNewHeader setIsShowForm={setIsShowForm} setUpdate={setUpdate} />
      </div>
      <article className="lg:mr-8 flex justify-center items-center gap-4">
        <button
          onClick={DarkModeToggle}
          className="px-4 py-1 rounded-lg shadow-sm text-lg transition ease-in-out duration-150 bg-transparent md:bg-gray-100 dark:bg-transparent md:hover:bg-gray-100 md:active:ring-2 md:ring-itemsNav dark:hover:bg-itemsNavDark hover:shadow-md dark:hover:shadow-md"
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun text-gray-700 dark:text-gray-300 text-md transition ease-in-out rotate-45 duration-500"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-200 md:text-gray-700 dark:text-gray-300 text-md transition ease-out duration-500"></i>
          )}
        </button>
        <button
          onClick={userMenuToggle}
          className="px-2 py-1 flex justify-center items-center gap-4 rounded-lg shadow-sm bg-transparent md:bg-gray-100 dark:bg-transparent md:active:ring-2 md:ring-itemsNav transition ease-in-out duration-150 hover:shadow-md dark:hover:bg-itemsNavDark md:hover:bg-gray-100 dark:hover:shadow-md"
        >
          <p className="hidden lg:flex font-default text-sm font-light text-gray-500  dark:text-gray-400">
            Guest#2553
          </p>
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-circle-user text-gray-200 dark:text-gray-300 md:text-gray-700 text-xl"></i>
            {showUserMenu ? (
              <i className="fa-solid fa-caret-up text-gray-200 dark:text-gray-300 text-sm"></i>
            ) : (
              <i className="fa-solid fa-caret-down text-gray-200 md:text-gray-700 dark:text-gray-300 text-sm"></i>
            )}
          </div>
        </button>
      </article>
    </section>
  );
};

export default HeaderUser;
