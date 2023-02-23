import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import SearchBar from "../../utilities/container/SearchBar";
import UsersCard from "./UsersCard";
import FormModal from "../container/FormModal";
import ModalDelete from "../../utilities/container/ModalDelete";
import ButtonMobile from "../../utilities/navbar/ButtonMobile";
import TimelineNav from "../../utilities/container/TimelineNav";

const Users = ({
  isShowUsersForm,
  setIsShowUsersForm,
  update,
  setUpdate,
  setIsLoading,
  showDelete,
  setShowDelete,
  activePage,
  setActivePage,
  setShowSideBar,
  userSession,
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
    const URL = "https://crud-api-express.onrender.com/api/v1/clients";

    axios
      .get(URL, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((res) => {
        setUsers(res.data?.data);
        setIsLoading(false);
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
        className={"fixed inset-0 z-40"}
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
          setIsLoading={setIsLoading}
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
          setIsLoading={setIsLoading}
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
            Hi,{" "}
            <span className="text-gray-800">
              {userSession?.firstName.charAt(0).toUpperCase() +
                userSession?.firstName.slice(1)}
            </span>
          </h4>
          <h2 className="mt-1 pl-4 font-medium text-2xl text-gray-700">
            You have{" "}
            <span className="text-blue-600">
              {
                users?.filter(user => user.status === "active").length
              }
            </span> active
            clients today
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
          setShowDelete={setShowDelete}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          activePage={activePage}
          setIsLoading={setIsLoading}
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
