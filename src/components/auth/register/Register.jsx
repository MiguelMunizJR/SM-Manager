import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import RegisterHeader from "./RegisterHeader";
import RegisterCard from "./RegisterCard";

const Register = ({ setActivePage, setIsLoading }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setActivePage("/auth");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const submitForm = (data) => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/auth/register";

    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
        reset({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        navigate("/auth/login");
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <section className="w-full min-h-screen flex flex-col pb-14">
        <RegisterHeader />
        <section className="w-full min-h-screen sm:h-screen mt-4 pt-6 flex justify-center bg-gray-50 overflow-y-hidden">
          <article className="w-full md:mt-10 hidden sm:block fixed inset-0 z-0 bg-slate-800">
            <img
              src="https://i.postimg.cc/wvBGWsFY/pexels-d-vaughn-bell-2068664.jpg"
              alt="hero_login"
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
