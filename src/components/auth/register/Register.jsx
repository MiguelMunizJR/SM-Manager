// Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
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
          <RegisterCard
            handleSubmit={handleSubmit}
            submitForm={submitForm}
            register={register}
          />
        </motion.section>
      </section>
    </>
  );
};

export default Register;
