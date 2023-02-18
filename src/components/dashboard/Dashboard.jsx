import { Transition } from "@headlessui/react";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../container/Header";
import NavBar from "../navbar/NavBar";

const Dashboard = ({
  activePage,
  setActivePage,
  setShowSideBar,
  showSideBar,
}) => {
  useEffect(() => {
    setActivePage("/dashboard");
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
            onClick={() => setShowSideBar(!showSideBar)}
            className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10"
          ></section>
        </Transition.Child>
      </Transition>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        {/* Header */}
        {/* Header in mobile */}
        <article className="w-full h-14 md:mt-3 flex justify-between bg-gray-50 z-40 md:bg-transparent">
          <section className="w-full md:hidden ml-5 flex gap-4 items-center text-gray-800">
            <button onClick={handleSidebar}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="font-default text-lg font-semibold">SM Manager</h1>
          </section>
          <Header
            // setIsShowUsersForm={setIsShowUsersForm}
            // setUpdate={setUpdate}
            activePage={activePage}
          />
        </article>
        <article className="min-h-max mt-3 ml-4 flex items-center gap-3 text-gray-600">
          <NavLink to="/" className="flex items-center gap-1 text-sm">
            <i className="fa-solid fa-home"></i>
            <p>Home</p>
          </NavLink>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="flex items-center gap-1 text-sm">
            <i className="fa-solid fa-gauge"></i>
            <p>Dashboard</p>
          </div>
        </article>
        <section className="pl-4 font-default text-gray-800">
          CONTENT HERE
        </section>
      </section>
    </>
  );
};

export default Dashboard;
