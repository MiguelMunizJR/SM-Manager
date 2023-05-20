// Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
// Components & utils
import RegisterCard from "./RegisterCard";
import { ROUTES_PATH, URL_API } from "../../../consts";

const Register = ({ setActivePage, isLogin }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    isLogin && navigate(ROUTES_PATH.HOME);
    setActivePage(ROUTES_PATH.REGISTER);
  }, []);

  const submitForm = (data) => {
    const URL = `${URL_API}${ROUTES_PATH.REGISTER}`;

    axios
      .post(URL, data)
      .then(() => {
        toast.success("You are successfully registered");
        reset({
          firstName: "",
          email: "",
          lastName: "",
          password: "",
        });
        navigate(ROUTES_PATH.LOGIN);
      })
      .catch(() => toast.error("Error when trying to register"));
  };

  return (
    <>
      <section className="w-full min-h-screen flex flex-col pb-14">
        <section className="w-full min-h-screen sm:h-screen mt-4 pt-6 flex justify-center bg-gray-50 overflow-y-hidden">
          <article className="w-full md:mt-10 hidden sm:block fixed inset-0 z-0 bg-slate-800">
            <img
              src="https://i.postimg.cc/XqTJLs6p/signup-background.jpg"
              alt="signup_background"
              className="w-full h-full object-cover filter blur-sm opacity-70 bg-gray-200"
              draggable={false}
            />
          </article>
          <RegisterCard
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            register={register}
          />
        </section>
      </section>
    </>
  );
};

export default Register;
