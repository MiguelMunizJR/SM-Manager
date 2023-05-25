// Dependencies
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
        window.location.reload();
      })
      .catch(() => {
        toast.error("Error trying to log in");
      });
  };

  return (
    <>
      <section className="w-full min-h-screen flex justify-center sm:items-center bg-slate-200">
        <motion.section
          className="w-full flex justify-center sm:items-center"
          initial={{ opacity: 0, translateY: -10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
        >
          <LoginCard
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            register={register}
          />
        </motion.section>
      </section>
    </>
  );
};

export default Login;
