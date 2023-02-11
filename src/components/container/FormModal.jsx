import { useForm } from "react-hook-form";
import axios from "axios";
import UsersForm from "../../utilities/users/UsersForm";
import {
  defaultUsersValues,
  defaultTasksValues,
} from "../../utilities/defaultValues";
import { useEffect } from "react";
import TasksForm from "../../utilities/tasks/TasksForm";

const FormModal = ({
  activePage,
  setIsShowTasksForm,
  setIsShowUsersForm,
  getAllTasks,
  getAllUsers,
  update,
  setUpdate,
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (update) {
      reset(update);
    }
  }, [update]);

  const submitUsersData = (data) => {
    if (update) {
      const URL = `https://crud-api-express.onrender.com/api/v1/users/${update.id}/`;

      axios
        .patch(URL, data)
        .then(() => {
          reset(defaultUsersValues);
          getAllUsers();
          setUpdate(null);
          setIsShowUsersForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const URL = "https://crud-api-express.onrender.com/api/v1/users/";

      axios
        .post(URL, data)
        .then(() => {
          reset(defaultUsersValues);
          getAllUsers();
          setIsShowUsersForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const submitTaskData = (data) => {
    if (update) {
      const URL = `https://crud-api-express.onrender.com/api/v1/tasks/${update.id}/`;

      axios
        .patch(URL, data)
        .then(() => {
          reset(defaultTasksValues);
          getAllTasks();
          setUpdate(null);
          setIsShowTasksForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const URL = "https://crud-api-express.onrender.com/api/v1/tasks/";

      axios
        .post(URL, data)
        .then(() => {
          reset(defaultTasksValues);
          getAllTasks();
          setIsShowTasksForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const closeModal = () => {
    if (activePage === "/users") {
      setIsShowUsersForm(false);
    }
    setIsShowTasksForm(false);
  };

  return (
    <section className="w-max h-max mx-auto pb-8 rounded-md bg-neutral-100 dark:bg-navBarDark flex flex-col items-center drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 outline-none focus:outline-none">
      <header className="w-full flex self-start justify-between items-center">
        <div className="mt-6 ml-6 flex items-center gap-2">
          {update ? (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              {activePage === "/users" ? "Update User" : "Update Task"}
            </h3>
          ) : (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              {activePage === "/users" ? "Create User" : "Create Task"}
            </h3>
          )}
          <i
            className={
              activePage === "/users"
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
      {activePage === "/users" ? (
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
