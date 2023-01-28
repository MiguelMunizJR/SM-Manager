import { useForm } from "react-hook-form";
import axios from "axios";
import UsersForm from "../../utilities/users/UsersForm";
import defaultValues from "../../utilities/users/defaultValues";
import { useEffect } from "react";

const FormModal = ({ setIsShowForm, getAllUsers, update, setUpdate }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (update) {
      reset(update);
    }
  }, [update]);

  const submitData = (data) => {
    if (update) {
      const URL = `https://crud-api-express.onrender.com/api/v1/users/${update.id}/`;

      axios
        .patch(URL, data)
        .then(() => {
          reset(defaultValues);
          getAllUsers();
          setUpdate(null);
          setIsShowForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const URL = "https://crud-api-express.onrender.com/api/v1/users/";

      axios
        .post(URL, data)
        .then(() => {
          reset(defaultValues);
          getAllUsers();
          setIsShowForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="w-max min-h-max mx-auto pb-8 rounded-md bg-neutral-100 dark:bg-navBarDark flex flex-col items-center drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 outline-none focus:outline-none">
      <header className="w-full flex self-start justify-between items-center">
        <div className="mt-6 ml-4 flex items-center gap-2">
          {update ? (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              Update User
            </h3>
          ) : (
            <h3 className="font-default text-2xl text-black dark:text-gray-300 font-normal">
              Create User
            </h3>
          )}
          <i className="fa-solid fa-user text-black dark:text-gray-300"></i>
        </div>
        <button
          onClick={() => setIsShowForm(false)}
          className="mr-4 flex justify-center items-center text-2xl"
        >
          <i className="fa-solid fa-xmark text-black dark:text-gray-400"></i>
        </button>
      </header>
      <UsersForm
        register={register}
        handleSubmit={handleSubmit}
        submitData={submitData}
        update={update}
        reset={reset}
        setIsShowForm={setIsShowForm}
      />
    </section>
  );
};

export default FormModal;
