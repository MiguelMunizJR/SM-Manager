import { useEffect, useState, startTransition } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import SearchBar from "../../utilities/container/SearchBar";
// import Header from "../container/Header";
import UsersCard from "./UsersCard";
import FormModal from "../container/FormModal";
import ModalDelete from "../../utilities/container/ModalDelete";
import { NavLink } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import LoginButtons from "../../utilities/login/LoginButtons";

const Users = ({
  isShowUsersForm,
  setIsShowUsersForm,
  update,
  setUpdate,
  isLoading,
  setIsLoading,
  showDelete,
  setShowDelete,
  activePage,
  setActivePage,
  setShowSideBar,
  showSideBar
}) => {
  const [users, setUsers] = useState(null);
  const [filterUsers, setFilterUsers] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    !users && setIsLoading(true);
    getAllUsers();
    setActivePage("/clients");
    setShowSideBar(false);
  }, []);

  const getAllUsers = () => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/clients";

    axios
      .get(URL)
      .then((res) => {
        startTransition(() => {
          setUsers(res.data?.data);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <section onClick={handleSidebar} className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10"></section>
        </Transition.Child>
      </Transition>
      {/* Form Animation */}
      <Transition
        as="section"
        className={"fixed inset-0 z-50"}
        show={isShowUsersForm}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FormModal
          activePage={activePage}
          setIsShowUsersForm={setIsShowUsersForm}
          getAllUsers={getAllUsers}
          update={update}
          setUpdate={setUpdate}
        />
        <section className="w-screen h-screen opacity-10 absolute inset-0 bg-slate-800 z-10"></section>
      </Transition>
      {/* Modal Delete Confirm */}
      <Transition
        as="section"
        className={"fixed inset-0 z-50"}
        show={showDelete}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ModalDelete
          setShowDelete={setShowDelete}
          setIsDelete={setIsDelete}
          activePage={activePage}
        />
        {/* MODAL DELETE CONFIRM HERE! */}
        <section className="w-screen h-screen opacity-30 dark:opacity-50 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
      </Transition>
      <section className="w-full h-screen flex flex-col justify-between bg-gray-50">
        {/* Header */}
        {/* Header in mobile */}
        <article className="w-full h-14 md:mt-3 flex justify-between bg-gray-50 z-40 md:bg-transparent">
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
        <article className="min-h-max mt-3 ml-4 flex items-center gap-3 text-gray-600">
          <NavLink to="/" className="flex items-center gap-1 text-sm">
            <i className="fa-solid fa-home"></i>
            <p>Home</p>
          </NavLink>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="flex items-center gap-1 text-sm">
            <i className="fa-solid fa-user"></i>
            <p>Clients</p>
          </div>
        </article>
        <article className="mt-6 pl-4 font-default text-gray-800">
          <h4 className="text-lg font-medium text-blue-600">
            Hi, <span className="text-gray-800">Junior</span>
          </h4>
          <h2 className="mt-1 pl-4 font-medium text-2xl text-gray-700">
            You have <span className="text-blue-600">5</span> active clients
            today
          </h2>
        </article>
        <SearchBar
          activePage={activePage}
          setFilterUsers={setFilterUsers}
          users={users}
        />
        <UsersCard
          getAllUsers={getAllUsers}
          users={users}
          setUsers={setUsers}
          filterUsers={filterUsers}
          setFilterUsers={setFilterUsers}
          setUpdate={setUpdate}
          setIsShowUsersForm={setIsShowUsersForm}
          isLoading={isLoading}
          setShowDelete={setShowDelete}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          activePage={activePage}
        />
      </section>
    </>
  );
};

export default Users;
