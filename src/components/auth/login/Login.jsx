import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect } from "react";
import LoginCard from "./LoginCard";
import { useNavigate } from "react-router-dom";

const Login = ({ getUserInfo, setActivePage, setIsLoading, loadingEnd }) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setActivePage("/auth/login");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const submitForm = async (data) => {
    setIsLoading(true);
    const URL = "https://crud-api-express.onrender.com/api/v1/auth/login";

    await axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res?.data.token);
        reset({
          email: "",
          password: "",
        });
        loadingEnd();
        getUserInfo();
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
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
