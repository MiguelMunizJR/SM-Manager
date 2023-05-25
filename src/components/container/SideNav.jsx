import { NavLink } from "react-router-dom";
import { ROUTES_PATH } from "../../consts";
import useUser from "../../hooks/useUser";
import Loading from "../Loading";

const SideNav = ({ isLogin }) => {
  const { user, loading } = useUser();

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (isLogin && loading) {
    return <Loading />;
  } else {
    return (
      <aside className="w-52 h-screen pt-4 hidden lg:flex flex-col fixed bg-slate-100 top-14 shadow-md shadow-gray-400 z-40 transition-all">
        <article className="w-5/6 h-2/5 mx-auto pt-4 flex flex-col items-center border-b border-gray-200">
          <div className="w-20 h-20 rounded-full">
            <img
              src="https://i.postimg.cc/Hk0x00Zk/profile-img.jpg"
              alt="profile-image"
              className="w-full h-full object-contain rounded-full"
              draggable={false}
            />
          </div>
          <h4 className="mt-2 font-default text-xl font-semibold text-gray-800">
            {user ? `${user?.firstName} ${user?.lastName}` : "Welcome"}
          </h4>
          <p className="font-default text-gray-500 text-sm font-normal">
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
        </article>
        <article className="w-full pt-6 px-4 flex flex-col gap-2 font-default transition-colors">
          <NavLink
            className="w-full h-12 px-2 flex items-center gap-2 rounded text-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            to={ROUTES_PATH.CLIENTS}
          >
            <i className="fa-solid fa-users"></i>
            Clients
          </NavLink>
          <NavLink
            className="w-full h-12 px-2 flex items-center gap-2 rounded text-lg text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            to={ROUTES_PATH.TASKS}
          >
            <i className="fa-solid fa-list-check"></i>
            Tasks
          </NavLink>
        </article>
      </aside>
    );
  }
};

export default SideNav;
