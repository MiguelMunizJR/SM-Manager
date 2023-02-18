import { Transition } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ModalDelete from "../../utilities/container/ModalDelete";
import SearchBar from "../../utilities/container/SearchBar";
import FormModal from "../container/FormModal";
import Header from "../container/Header";
import TasksCard from "./TasksCard";

const Tasks = ({
  isShowTasksForm,
  setIsShowTasksForm,
  isLoading,
  setIsLoading,
  update,
  setUpdate,
  showDelete,
  setShowDelete,
  activePage,
  setActivePage,
}) => {
  const [tasks, setTasks] = useState(null);
  const [filterTasks, setFilterTasks] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    !tasks && setIsLoading(true);
    getAllTasks();
    setActivePage("/tasks");
  }, []);

  const getAllTasks = () => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/tasks";

    axios
      .get(URL)
      .then((res) => {
        setTasks(res.data?.data);
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
        className={"fixed inset-0 z-50"}
        show={isShowTasksForm}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <FormModal
          activePage={activePage}
          setIsShowTasksForm={setIsShowTasksForm}
          getAllTasks={getAllTasks}
          update={update}
          setUpdate={setUpdate}
        />
        <section className="w-screen h-screen opacity-30 dark:opacity-30 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
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
        <section className="w-screen h-screen opacity-30 dark:opacity-50 absolute inset-0 bg-slate-800 dark:bg-gray-800 z-10"></section>
      </Transition>
      <section className="w-full h-screen flex flex-col justify-between bg-gray-50">
        <article className="w-full h-14 md:mt-3 flex justify-between bg-gray-50 md:bg-transparent">
          <section className="w-full md:hidden ml-5 flex gap-4 items-center text-gray-800">
            <button className="">
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1 className="font-default text-lg font-semibold">SM Manager</h1>
          </section>
          <Header
            setIsShowTasksForm={setIsShowTasksForm}
            setUpdate={setUpdate}
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
            <i className="fa-solid fa-list-check"></i>
            <p>Tasks</p>
          </div>
        </article>
        <article className="mt-6 pl-4 font-default text-gray-800">
          <h4 className="text-lg font-medium text-blue-600">
            Hola, <span className="text-gray-800">Junior</span>
          </h4>
          <h2 className="mt-1 pl-4 font-medium text-2xl text-gray-700">
            You have <span className="text-blue-600">5</span> pending tasks today
          </h2>
        </article>
        <SearchBar
          activePage={activePage}
          setFilterTasks={setFilterTasks}
          tasks={tasks}
        />
        <TasksCard
          tasks={tasks}
          getAllTasks={getAllTasks}
          setIsShowTasksForm={setIsShowTasksForm}
          isLoading={isLoading}
          setUpdate={setUpdate}
          isDelete={isDelete}
          setIsDelete={setIsDelete}
          setShowDelete={setShowDelete}
          activePage={activePage}
          filterTasks={filterTasks}
        />
      </section>
    </>
  );
};

export default Tasks;
