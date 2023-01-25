import { useState } from "react";
import ButtonNewHeader from "../../utilities/container/ButtonNewHeader";

const HeaderUser = ({ setIsShowForm, setIsAnimatedModal, setUpdate }) => {
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
    <section className="mr-12 flex justify-center items-center gap-14">
      <ButtonNewHeader
        setIsShowForm={setIsShowForm}
        setIsAnimatedModal={setIsAnimatedModal}
        setUpdate={setUpdate}
      />
      <article className="flex justify-center items-center gap-4">
        <button
          onClick={DarkModeToggle}
          className="px-4 py-1 bg-gray-100 dark:bg-gray-800 rounded shadow-sm dark:hover:shadow-black transition ease-in-out duration-150 hover:shadow-md dark:hover:shadow-md active:ring-2 active:ring-itemsNavH"
        >
          {isDarkMode ? (
            <i className="fa-solid fa-sun text-gray-700 dark:text-gray-300 text-md transition ease-in-out rotate-45 duration-500"></i>
          ) : (
            <i className="fa-solid fa-moon text-gray-700 dark:text-gray-300 text-md transition ease-out duration-500"></i>
          )}
        </button>
        <button
          onClick={userMenuToggle}
          className="px-2 py-1 flex justify-center items-center gap-4 rounded bg-gray-100 dark:bg-gray-800 shadow-sm dark:hover:shadow-black transition ease-in-out duration-150 hover:shadow-md dark:hover:shadow-md active:ring-2 active:ring-itemsNavH"
        >
          <p className="font-default text-sm font-light text-gray-500 dark:text-gray-400">
            Guest#2553
          </p>
          <div className="flex gap-2 items-center">
            <i className="fa-regular fa-circle-user text-gray-500 dark:text-gray-300 text-xl"></i>
            {showUserMenu ? (
              <i className="fa-solid fa-caret-up text-gray-600 dark:text-gray-300 text-sm"></i>
            ) : (
              <i className="fa-solid fa-caret-down text-gray-600 dark:text-gray-300 text-sm"></i>
            )}
          </div>
        </button>
      </article>
    </section>
  );
};

export default HeaderUser;
