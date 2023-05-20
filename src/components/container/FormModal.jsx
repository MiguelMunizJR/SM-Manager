import { useForm } from "react-hook-form";
import axios from "axios";
import UsersForm from "../clients/ClientsForm";
import {
  defaultUsersValues,
  defaultTasksValues,
} from "../../utilities/defaultValues";
import { useEffect } from "react";
import TasksForm from "../tasks/TasksForm";

const FormModal = ({
  activePage,
  setIsShowTasksForm,
  setIsShowUsersForm,
  getAllTasks,
  getAllUsers,
  update,
  setUpdate,
  setIsLoading,
}) => {
  const { register, handleSubmit, reset } = useForm();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (update) {
      reset(update);
    }
  }, [update]);

  const submitUsersData = (data) => {
    setIsLoading(true);
    if (update) {
      const URL = `https://crud-api-express.onrender.com/api/v1/clients/${update.id}/`;

      axios
        .patch(URL, data, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
        .then(() => {
          setIsShowUsersForm(false);
          getAllUsers();
          reset(defaultUsersValues);
          setUpdate(null);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      const URL = "https://crud-api-express.onrender.com/api/v1/clients/";

      axios
        .post(URL, data, {
          headers: {
            Authorization: `JWT ${token}`,
          },
        })
        .then(() => {
          setIsShowUsersForm(false);
          getAllUsers();
          reset(defaultUsersValues);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const submitTaskData = (data) => {
    setIsLoading(true);
    if (update) {
      const URL = `https://crud-api-express.onrender.com/api/v1/tasks/${update.id}/`;

      axios
        .patch(
          URL,
          {
            title: data.title,
            description: !data.description
              ? "No description"
              : data.description,
            isCompleted: data.isCompleted,
          },
          {
            headers: {
              Authorization: `JWT ${token}`,
            },
          }
        )
        .then(() => {
          setIsShowTasksForm(false);
          getAllTasks();
          reset(defaultTasksValues);
          setUpdate(null);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    } else {
      const URL = "https://crud-api-express.onrender.com/api/v1/tasks/";

      axios
        .post(
          URL,
          {
            title: data.title,
            description: !data.description
              ? "No description"
              : data.description,
            isCompleted: data.isCompleted,
          },
          {
            headers: {
              Authorization: `JWT ${token}`,
            },
          }
        )
        .then(() => {
          setIsShowTasksForm(false);
          getAllTasks();
          reset(defaultTasksValues);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  const closeModal = () => {
    if (activePage === "/clients") {
      setIsShowUsersForm(false);
    } else if (activePage === "/tasks") {
      setIsShowTasksForm(false);
    }
  };

  return (
    <section className="w-max h-max mx-auto pb-8 rounded-md bg-gray-50 flex flex-col items-center drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 outline-none focus:outline-none">
      <header className="w-full flex self-start justify-between items-center">
        <div className="mt-6 ml-6 flex items-center gap-2">
          {update ? (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              {activePage === "/clients" ? "Update Client" : "Update Task"}
            </h3>
          ) : (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              {activePage === "/clients" ? "Create Client" : "Create Task"}
            </h3>
          )}
          <i
            className={
              activePage === "/clients"
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
      {activePage === "/clients" ? (
        <UsersForm
          register={register}
          handleSubmit={handleSubmit}
          submitUsersData={submitUsersData}
          update={update}
          reset={reset}
          setIsShowUsersForm={setIsShowUsersForm}
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
