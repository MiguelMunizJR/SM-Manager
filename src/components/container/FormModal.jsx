import { useForm } from "react-hook-form";
import axios from "axios";
import UsersForm from "../../utilities/users/UsersForm";
import { useEffect } from "react";

const FormModal = ({ setIsShowForm, getAllUsers, update }) => {
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
          reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            birthday: "",
          });
          getAllUsers();
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
          reset({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            birthday: "",
          });
          getAllUsers();
          setIsShowForm(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section className="w-max min-h-max my-10 mx-auto pb-8 rounded-md bg-neutral-100 dark:bg-navBarDark dark:ring-1 dark:ring-itemsNavDark flex flex-col items-center drop-shadow-2xl overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
      />
    </section>
  );
};

export default FormModal;
