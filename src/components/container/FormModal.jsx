// Dependencies
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
// Components & utils
import {
  defaultClientsValues,
  defaultTasksValues,
} from "../../utilities/defaultValues";
import TasksForm from "../tasks/TasksForm";
import ClientsForm from "../clients/ClientsForm";
import { ROUTES_PATH } from "../../consts";
import { createNewTask, updateTask } from "../../services/tasksServices";
import { createNewClient, updateClient } from "../../services/clientsServices";
import { useLocation } from "react-router-dom";
import useUser from "../../hooks/useUser";

const FormModal = ({
  getAllTasks,
  getAllClients,
  setClientsCounter,
  setTasksCounter,
  setIsShowTasksForm,
  setIsShowClientsForm,
  setShowSideNav,
  update,
  setUpdate,
  setReload
}) => {
  const { register, handleSubmit, reset } = useForm();
  const { getUserInfo } = useUser();
  const activePage = useLocation().pathname;

  useEffect(() => {
    if (update) {
      reset(update);
    }
  }, [update]);

  //* Crear o actualizar un cliente
  const submitClientData = (data) => {
    const { firstName, lastName, password } = data;

    //! Validaciones
    if (firstName.trim() === "" || lastName.trim() === "" || password?.trim() === "") {
      toast.error("Please complete all fields");
      return;
    }

    if (!isNaN(firstName) || !isNaN(lastName)) {
      toast.error("Sorry, you cannot use numbers in the name fields.");
      return;
    }

    if (update) {
      //* Actualizamos un cliente
      updateClient(data, update)
        .then(() => {
          setReload(true);
          setIsShowClientsForm(false);
          getAllClients();
          reset(defaultClientsValues);
          setUpdate(null);
          toast.success("User successfully updated");
          setShowSideNav(false);
        })
        .catch(() => {
          toast.error("Error when updating client");
          setReload(false);
        });
    } else {
      //* Creamos un nuevo cliente
      createNewClient(data)
        .then(() => {
          setIsShowClientsForm(false);
          getAllClients();
          reset(defaultClientsValues);
          toast.success("User successfully created");
          setClientsCounter((prevState) => prevState + 1);
          setShowSideNav(false);
        })
        .catch(() => {
          toast.error("Error when creating a new client");
        });
    }
  };

  //* Crear o actualizar una tarea
  const submitTaskData = (data) => {
    const { title, description } = data;

    //! Validaciones
    if (title.trim() === "" || description.trim() === "") {
      toast.error("Please complete all fields");
      return;
    }

    if (!isNaN(title) || !isNaN(description)) {
      toast.error("Sorry, you cannot use numbers in the name fields.");
      return;
    }

    if (update) {
      //* Actualizamos una tarea
      updateTask(data, update)
        .then(() => {
          setIsShowTasksForm(false);
          getAllTasks();
          reset(defaultTasksValues);
          setUpdate(null);
          toast.success("Task successfully updated");
          setShowSideNav(false);
        })
        .catch(() => {
          toast.error("Error while updating the task");
        });
    } else {
      //* Creamos una nueva tarea
      createNewTask(data)
        .then(() => {
          setIsShowTasksForm(false);
          getUserInfo();
          getAllTasks();
          reset(defaultTasksValues);
          toast.success("Task successfully created");
          setTasksCounter((prevState) => prevState + 1);
          setShowSideNav(false);
        })
        .catch(() => {
          toast.error("Error when creating a new task");
        });
    }
  };

  const closeModal = () => {
    if (activePage === ROUTES_PATH.CLIENTS) {
      setIsShowClientsForm(false);
    } else if (activePage === ROUTES_PATH.TASKS) {
      setIsShowTasksForm(false);
    }
  };

  return (
    <section className="w-max h-max mx-auto pb-8 rounded-md bg-gray-50 flex flex-col items-center drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 outline-none focus:outline-none">
      <header className="w-full flex self-start justify-between items-center">
        <div className="mt-6 ml-6 flex items-center gap-2">
          {update ? (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              {activePage === ROUTES_PATH.CLIENTS
                ? "Update Client"
                : "Update Task"}
            </h3>
          ) : (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              {activePage === ROUTES_PATH.CLIENTS
                ? "Create Client"
                : "Create Task"}
            </h3>
          )}
          <i
            className={
              activePage === ROUTES_PATH.CLIENTS
                ? "fa-solid fa-user text-black dark:text-gray-300"
                : "fa-solid fa-list-check text-black dark:text-gray-300"
            }
          ></i>
        </div>
        <button
          onClick={closeModal}
          className="mr-4 flex justify-center items-center text-2xl"
        >
          <i className="fa-solid fa-xmark text-black dark:text-gray-400"></i>
        </button>
      </header>
      {activePage === ROUTES_PATH.CLIENTS ? (
        <ClientsForm
          register={register}
          handleSubmit={handleSubmit}
          submitClientData={submitClientData}
          update={update}
          reset={reset}
          setIsShowClientsForm={setIsShowClientsForm}
        />
      ) : (
        <TasksForm
          register={register}
          handleSubmit={handleSubmit}
          submitTaskData={submitTaskData}
          update={update}
          reset={reset}
          setIsShowTasksForm={setIsShowTasksForm}
        />
      )}
    </section>
  );
};

export default FormModal;
