import { NavLink } from "react-router-dom";
import ListNav from "./ListNav";

const NavBar = ({ activePage, userSession }) => {
  return (
    <>
      {!activePage?.includes("/auth/") ? (
        <nav className="fixed w-48 min-h-screen flex-col items-center justify-between mt-14 bg-gray-50 lg:bg-gray-200 shadow-sm z-40 -translate-x-44">
          {userSession ? (
            <article className="w-full h-32 bg-gray-800 flex items-center font-default">
              <div className="w-max h-full flex pl-4 items-center">
                <img
                  src="https://i.postimg.cc/xdHGV1kX/7309681.jpg"
                  alt="avatar-image"
                  className="w-16 object-cover rounded-full"
                  draggable={false}
                />
              </div>
              <div className="w-full min-h-max flex flex-col gap-5 pl-3">
                <div>
                  <small className="font-medium text-gray-300 text-xs">
                    Name:
                  </small>
                  <h4 className="font-semibold text-gray-50">
                    {`${
                      userSession?.firstName.charAt(0).toUpperCase() +
                      userSession?.firstName.slice(1)
                    } ${
                      userSession?.lastName.charAt(0).toUpperCase() +
                      userSession?.lastName.slice(1)
                    }`}
                  </h4>
                </div>
                <div className="w-full min-h-max pl-2 flex gap-10 text-gray-200">
                  <div className="flex flex-col items-center gap-1">
                    <i className="fa-solid fa-users"></i>
                    <small>4/20</small>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <i className="fa-solid fa-tasks"></i>
                    <small>2/20</small>
                  </div>
                </div>
              </div>
            </article>
          ) : null}
          <div className="w-full h-screen flex justify-center">
            {userSession ? (
              <ListNav userSession={userSession} />
            ) : (
              <h5 className="w-full h-20 py-5 px-6 flex items-center gap-3 transition-all duration-75 ease-in bg-blue-700 text-lg font-normal text-gray-50">
                <i className="fa-solid fa-home"></i>
                <p>Home</p>
              </h5>
            )}
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
