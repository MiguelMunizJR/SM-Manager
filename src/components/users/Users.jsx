import { useEffect, useState, startTransition } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import SearchBar from "../../utilities/container/SearchBar";
// import Header from "../container/Header";
import UsersCard from "./UsersCard";
import FormModal from "../container/FormModal";
import ModalDelete from "../../utilities/container/ModalDelete";
import ButtonMobile from "../../utilities/navbar/ButtonMobile";
import Header from "../container/Header";
import TimelineNav from "../../utilities/container/TimelineNav";

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
  showSideBar,
}) => {
  const [users, setUsers] = useState(null);
  const [filterUsers, setFilterUsers] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const token = localStorage.getItem("token");

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
      .get(URL, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
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

  return (
    <>
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
        <TimelineNav
          actualPage="Clients"
          actualIcon="fa-solid fa-users"
          prevPag="Home"
          prevIcon="fa-solid fa-home"
        />
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
        <ButtonMobile
          setIsShowUsersForm={setIsShowUsersForm}
          setUpdate={setUpdate}
          activePage={activePage}
        />
      </section>
    </>
  );
};

export default Users;
