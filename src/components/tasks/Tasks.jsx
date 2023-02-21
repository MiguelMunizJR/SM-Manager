import { Transition } from "@headlessui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalDelete from "../../utilities/container/ModalDelete";
import SearchBar from "../../utilities/container/SearchBar";
import TimelineNav from "../../utilities/container/TimelineNav";
import ButtonMobile from "../../utilities/navbar/ButtonMobile";
import FormModal from "../container/FormModal";
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
  setShowSideBar,
}) => {
  const [tasks, setTasks] = useState(null);
  const [filterTasks, setFilterTasks] = useState(null);
  const [isDelete, setIsDelete] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    !tasks && setIsLoading(true);
    getAllTasks();
    setActivePage("/tasks");
    setShowSideBar(false);
  }, []);

  const getAllTasks = () => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/tasks";

    axios
      .get(URL, {
        headers: {
          "Authorization": `JWT ${token}`,
        },
      })
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
        <TimelineNav
          actualPage="Tasks"
          actualIcon="fa-solid fa-list-check"
          prevPag="Home"
          prevIcon="fa-solid fa-home"
        />
        <article className="mt-6 pl-4 font-default text-gray-800">
          <h4 className="text-lg font-medium text-blue-600">
            Hi, <span className="text-gray-800">Junior</span>
          </h4>
          <h2 className="mt-1 pl-4 font-medium text-2xl text-gray-700">
            You have <span className="text-blue-600">5</span> pending tasks
            today
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
        <ButtonMobile
          setIsShowTasksForm={setIsShowTasksForm}
          setUpdate={setUpdate}
          activePage={activePage}
        />
      </section>
    </>
  );
};

export default Tasks;
