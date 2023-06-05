import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES_PATH } from "../../consts";
import useUser from "../../hooks/useUser";
import CustomLoading from "./CustomLoading";
import { logout } from "../../utilities/auth/authServices";

const SideNav = ({ setShowSideNav }) => {
  const { user, loading } = useUser();

  useEffect(() => {
    console.log("montado");
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className="w-52 h-screen pt-4 lg:flex flex-col fixed bg-slate-100 top-14 shadow-md shadow-gray-400 z-40 -translate-x-52 lg:translate-x-52 transition-all">
      <article className="w-11/12 h-60 mx-auto pt-4 flex flex-col items-center border-b border-gray-200">
        {loading ? (
          <CustomLoading
            className="w-full h-full flex justify-center items-center"
            spinSize="w-16 h-16"
          />
        ) : (
          <>
            <div className="w-20 h-20 rounded-full">
              <img
                src="https://i.postimg.cc/Hk0x00Zk/profile-img.jpg"
                alt="profile-image"
                className="w-full h-full object-contain rounded-full"
                draggable={false}
                loading="lazy"
              />
            </div>
            <h4 className="mt-2 font-default text-xl font-semibold text-gray-800">
              {user ? `${user?.firstName} ${user?.lastName}` : "Welcome"}
            </h4>
            <p className="w-full text-center break-words font-default text-gray-500 text-sm font-normal">
              {user ? user?.email : "Please login to continue"}
            </p>
            {user ? (
              <button
                className="my-5 w-11/12 h-10 rounded flex justify-center items-center gap-1 text-red-400 ring-1 ring-red-200 hover:bg-red-100 hover:text-red-500 transition-colors"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <p>Logout</p>
              </button>
            ) : (
              <NavLink
                className="my-5 w-11/12 h-10 rounded flex justify-center items-center gap-2 text-gray-800 ring-1 ring-gray-300 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                to={ROUTES_PATH.LOGIN}
              >
                <i className="fa-solid fa-right-to-bracket"></i>
                <p>Login</p>
              </NavLink>
            )}
          </>
        )}
      </article>
      <article className="w-11/12 mx-auto pt-4 flex flex-col gap-2 font-default transition-colors">
        <NavLink
          className="mb-2 w-full h-12 px-2 flex items-center gap-2 rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          to={ROUTES_PATH.HOME}
          onClick={() => setShowSideNav(false)}
        >
          <i className="fa-solid fa-home text-lg"></i>
          Home
        </NavLink>
        <NavLink
          className="w-full h-12 px-2 flex items-center justify-between rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          to={ROUTES_PATH.CLIENTS}
          onClick={() => setShowSideNav(false)}
        >
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-users text-lg"></i>
            Clients
          </div>
          {user && (
            <small className="w-9 h-6 flex justify-center items-center rounded-full font-medium bg-slate-300 transition-colors">
              {user.clients?.length}
            </small>
          )}
        </NavLink>
        <NavLink
          className="w-full h-12 px-2 flex items-center justify-between rounded text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          to={ROUTES_PATH.TASKS}
          onClick={() => setShowSideNav(false)}
        >
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-list-check text-lg"></i>
            Tasks
          </div>
          {user && (
            <small className="w-9 h-6 flex justify-center items-center rounded-full font-medium bg-slate-300 transition-colors">
              {user.tasks?.length}
            </small>
          )}
        </NavLink>
      </article>
    </aside>
  );
};

export default SideNav;
