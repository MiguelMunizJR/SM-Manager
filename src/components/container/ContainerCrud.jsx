import { useEffect, useState, startTransition } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";
import SearchBar from "../../utilities/container/SearchBar";
import HeaderUser from "./HeaderUser";
import UsersCard from "../users/UsersCard";
import FormModal from "./FormModal";
import ModalDelete from "../../utilities/container/ModalDelete";

const ContainerCrud = ({ isShowForm, setIsShowForm, update, setUpdate }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    if (!users) {
      setIsLoading(true);
    }
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    const URL = "https://crud-api-express.onrender.com/api/v1/users";

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
        setIsLoading(true);
      });
  };

  return (
    <>
      {/* Form Animation */}
      <Transition
        as="section"
        className={"fixed inset-0 z-50"}
        show={isShowForm}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FormModal
          setIsShowForm={setIsShowForm}
          getAllUsers={getAllUsers}
          update={update}
        />
        <section className="w-screen h-screen opacity-20 dark:opacity-30 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
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
        <ModalDelete />
        {/* MODAL DELETE CONFIRM HERE! */}
        <section className="w-screen h-screen opacity-20 dark:opacity-30 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
      </Transition>
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200 dark:bg-containerDark">
        {/* Header */}
        {/* Header in mobile */}
        <article className="w-full h-14 md:mt-3 flex justify-between bg-navBar md:bg-transparent">
          <section className="w-full md:hidden ml-5 flex gap-4 items-center text-gray-300">
            <button className="">
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="font-default text-lg font-medium">CRUD Manager</h1>
          </section>
          <SearchBar />
          <HeaderUser setIsShowForm={setIsShowForm} setUpdate={setUpdate} />
        </article>
        <UsersCard
          getAllUsers={getAllUsers}
          users={users}
          setUpdate={setUpdate}
          setIsShowForm={setIsShowForm}
          isLoading={isLoading}
          setShowDelete={setShowDelete}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
        />
      </section>
    </>
  );
};

export default ContainerCrud;
