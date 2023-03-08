import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import SearchBar from "../container/SearchBar";
import UsersCard from "./UsersCard";
import FormModal from "../container/FormModal";
import ModalDelete from "../container/ModalDelete";
import ButtonMobile from "../navbar/ButtonMobile";
import TimelineNav from "../container/TimelineNav";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    !token && navigate("/auth/login");
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
      {isShowUsersForm && (
        <motion.section
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
          }}
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
        </motion.section>
      )}
      {/* Modal Delete Confirm */}
      {showDelete && (
        <motion.section
          className="fixed inset-0 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
          }}
        >
          {/* MODAL DELETE CONFIRM HERE! */}
          <ModalDelete
            setShowDelete={setShowDelete}
            setIsDelete={setIsDelete}
            activePage={activePage}
            setIsLoading={setIsLoading}
          />
          <section className="w-screen h-screen opacity-30 dark:opacity-50 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
        </motion.section>
      )}
      <section className="w-full h-screen flex flex-col justify-between bg-gray-50">
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          <TimelineNav
            actualPage="Clients"
            actualIcon="fa-solid fa-users"
            prevPag="Home"
            prevIcon="fa-solid fa-home"
          />
        </motion.div>
        <motion.article
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: "easeInOut",
          }}
        >
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
                {users?.filter((user) => user.status === "active").length}
              </span>{" "}
              active clients today
            </h2>
          </article>
        </motion.article>
        <motion.div
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: "easeInOut",
          }}
        >
          <SearchBar
            activePage={activePage}
            setFilterUsers={setFilterUsers}
            users={users}
          />
        </motion.div>
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
