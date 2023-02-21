import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import LoginButtons from "../../utilities/login/LoginButtons";
import NavBar from "../navbar/NavBar";

const Header = ({ showSideBar, setShowSideBar, activePage }) => {

  const handleSidebar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <>
      {/* Sidebar Animation */}
      <Transition
        as="section"
        className={"fixed inset-0 z-40"}
        show={showSideBar}
        enter="transition-all duration-200"
        enterFrom=" -translate-x-44"
        enterTo="translate-x-44"
        leave="transition-all duration-400"
        leaveFrom="translate-x-44"
        leaveTo="-translate-x-44"
      >
        <NavBar activePage={activePage} />
        <Transition.Child
          as="section"
          className={"fixed inset-0 z-10"}
          enter="transition-opacity"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <section
            onClick={handleSidebar}
            className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10"
          ></section>
        </Transition.Child>
      </Transition>
      {/* Header */}
      <article className="w-full h-16 flex justify-between items-center bg-gray-50 z-40">
        <section className="w-full ml-5 flex gap-4 items-center text-gray-800">
          <button onClick={handleSidebar}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <NavLink to="/">
            <h1 className="font-default text-lg font-semibold">SM Manager</h1>
          </NavLink>
        </section>
        {/* <Header
            setIsShowUsersForm={setIsShowUsersForm}
            setUpdate={setUpdate}
            activePage={activePage} 
          /> */}
        <LoginButtons />
      </article>
    </>
  );
};

export default Header;