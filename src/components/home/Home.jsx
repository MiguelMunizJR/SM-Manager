import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../navbar/NavBar";
// import Header from "../container/Header";
import LoginButtons from "../../utilities/login/LoginButtons";

const Home = ({ activePage, setActivePage, setShowSideBar, showSideBar }) => {
  useEffect(() => {
    setActivePage("/");
    setShowSideBar(false);
  }, []);

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
        enter="transition duration-200"
        enterFrom=" -translate-x-44"
        enterTo="translate-x-44"
        leave="transition duration-200"
        leaveFrom="translate-x-44"
        leaveTo="-translate-x-44"
      >
        <NavBar activePage={activePage} />
        <Transition.Child
          as="section"
          className={"fixed inset-0 z-10"}
          enter="transition-opacity duration-0"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-50"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <section
            onClick={handleSidebar}
            className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10"
          ></section>
        </Transition.Child>
      </Transition>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        {/* Header */}
        {/* Header in mobile */}
        <article className="w-full h-16 md:mt-3 flex justify-between items-center bg-gray-50 z-40 md:bg-transparent">
          <section className="w-full md:hidden ml-5 flex gap-4 items-center text-gray-800">
            <button onClick={handleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="font-default text-lg font-semibold">SM Manager</h1>
          </section>
          {/* <Header
            setIsShowUsersForm={setIsShowUsersForm}
            setUpdate={setUpdate}
            activePage={activePage} 
          /> */}
          <LoginButtons />
        </article>
        <article className="pl-4 font-default text-gray-800">
          <div className="mt-4 flex gap-2 font-default text-lg font-medium text-gray-600">
            <i className="fa-solid fa-house text-base"></i>
            <h2>Home</h2>
          </div>
          <h4 className="mt-5 text-xl font-medium text-blue-600">
            Welcome, <span className="text-gray-800">Junior</span>
          </h4>
          <h2 className="mt-2 pl-4 font-medium text-xl text-gray-700">
            Manage your <span className="text-blue-600">clients</span> or{" "}
            <span className="text-blue-600">tasks</span> for your day-to-day
            operations
          </h2>
        </article>
        <section className="w-11/12 min-h-max mt-7 mx-auto flex flex-col gap-10 font-default">
          <article className="w-full min-h-max flex gap-4">
            <NavLink
              to="/clients"
              className="w-full h-64 flex justify-center rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
            >
              <div className="flex gap-1 items-center">
                <i className="fa-solid fa-users"></i>
                <h2 className="font-medium text-xl text-gray-800">Clients</h2>
              </div>
            </NavLink>
            <NavLink
              to="/tasks"
              className="w-full h-64 flex justify-center rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
            >
              <div className="flex gap-1 items-center">
                <i className="fa-solid fa-list-check"></i>
                <h2 className="font-medium text-xl text-gray-800">Tasks</h2>
              </div>
            </NavLink>
          </article>
          <NavLink
            to="/dashboard"
            className="w-full h-36 flex rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
          >
            <div className="ml-4 flex gap-1 items-center">
              <i className="fa-solid fa-gauge"></i>
              <h2 className="font-medium text-xl text-gray-800">Dashboard</h2>
            </div>
          </NavLink>
        </section>
      </section>
    </>
  );
};

export default Home;
