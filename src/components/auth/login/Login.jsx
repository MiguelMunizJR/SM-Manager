// Dependencies
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
// Components & utils
import { ROUTES_PATH, URL_API } from "../../../consts";
import LoginCard from "./LoginCard";

const Login = ({ isLogin, setIsLogin, setActivePage }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    isLogin && navigate(ROUTES_PATH.HOME);
    setActivePage(ROUTES_PATH.LOGIN);
  }, []);

  const submitForm = async (data) => {
    const URL = `${URL_API}${ROUTES_PATH.LOGIN}`;

    await axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data?.token);
        setIsLogin(true);
        toast.success("You are logged in");
        navigate(ROUTES_PATH.HOME);
        reset({
          email: "",
          password: "",
        });
      })
      .catch(() => toast.error("Error trying to log in"));
  };

  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50 overflow-y-hidden">
        <section className="w-full h-screen sm:h-screen mt-14 pt-6 flex justify-center bg-gray-50 overflow-y-hidden">
          <article className="w-full max-h-screen hidden sm:block absolute inset-0 z-0 bg-slate-500">
            <img
              src="https://i.postimg.cc/Hs6JF90v/home-hero.jpg"
              alt="hero_background"
              className="w-full h-full object-cover filter blur-sm opacity-70 bg-gray-800"
              draggable={false}
            />
          </article>
          <LoginCard
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            register={register}
          />
        </section>
      </section>
    </>
  );
};

export default Login;
