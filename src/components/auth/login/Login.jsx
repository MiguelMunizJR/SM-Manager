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

const Login = ({ isLogin }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    isLogin && navigate(ROUTES_PATH.HOME);
    console.log("login", isLogin);
  }, []);

  const submitForm = (data) => {
    const { email, password } = data;

    if (email === "" || password === "") {
      toast.error("Please enter your email and password");
      return;
    }

    const URL = `${URL_API}${ROUTES_PATH.LOGIN}`;

    axios
      .post(URL, data)
      .then((res) => {
        const token = res?.data.token;
        localStorage.setItem("token", token);
        toast.success("You are logged in");
        navigate(ROUTES_PATH.HOME);
        reset({
          email: "",
          password: "",
        });
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error("Incorrect email or password");
          return;
        }
        toast.error("An unexpected error occurred, try again later.");
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
            duration: 0.3,
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
