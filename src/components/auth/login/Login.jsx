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

  const submitForm = (data) => {
    const URL = `${URL_API}${ROUTES_PATH.LOGIN}`;

    axios
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
      .catch((err) => {
        toast.error("Error trying to log in");
        console.error(err.message);
      });
  };

  return (
    <>
      <section className="w-full min-h-screen flex justify-center sm:items-center bg-slate-200">
        <LoginCard
          handleSubmit={handleSubmit}
          submitForm={submitForm}
          register={register}
        />
      </section>
    </>
  );
};

export default Login;
