import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "../consts";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <article className="w-full h-14 flex justify-between items-center bg-gray-50 z-40 fixed top-0 left-0">
        <section className="w-full ml-4 flex gap-4 items-center text-gray-800">
          <NavLink to={ROUTES_PATH.HOME}>
            <h1 className="py-2 font-default text-xl font-semibold">
                SM Manager
            </h1>
          </NavLink>
        </section>
      </article>
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50">
        <header className="notfound__logo">
          <i className="fa-regular fa-face-sad-tear text-8xl text-gray-500"></i>
        </header>
        <div className="w-full mt-4 flex flex-col items-center font-default text-2xl font-medium text-gray-500">
          <h2>Sorry!</h2>
          <h2 className="">Page not found</h2>
          <button className="mt-14 flex gap-2 items-center text-lg bg-blue-700 text-gray-50 p-2 rounded-md" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>Return
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;