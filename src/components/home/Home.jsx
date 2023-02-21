import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = ({ setActivePage, setShowSideBar }) => {
  useEffect(() => {
    setActivePage("/");
    setShowSideBar(false);
  }, []);

  return (
    <>
      <section className="w-full h-screen">
        {/* Header */}
        <section className="flex flex-col pt-16 bg-gray-50">
          <div className="ml-4 flex gap-1 items-center text-gray-600 text-sm">
            <i className="fa-solid fa-home"></i>
            <h5>Home</h5>
          </div>
          <article className="pl-4 font-default text-gray-800">
            <h4 className="mt-5 text-xl font-medium text-blue-600">
              Welcome, <span className="text-gray-800">Junior</span>
            </h4>
            <h2 className="mt-2 pl-4 font-medium text-xl text-gray-700">
              Manage your <span className="text-blue-600">clients</span> or{" "}
              <span className="text-blue-600">tasks</span> for your day-to-day
              operations
            </h2>
          </article>
          <section className="w-11/12 min-h-max mt-7 mx-auto flex flex-col gap-10 font-default">
            <article className="w-full min-h-max flex gap-4">
              <NavLink
                to="/clients"
                className="w-full h-64 flex justify-center rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
              >
                <div className="flex gap-1 items-center">
                  <i className="fa-solid fa-users"></i>
                  <h2 className="font-medium text-xl text-gray-800">Clients</h2>
                </div>
              </NavLink>
              <NavLink
                to="/tasks"
                className="w-full h-64 flex justify-center rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
              >
                <div className="flex gap-1 items-center">
                  <i className="fa-solid fa-list-check"></i>
                  <h2 className="font-medium text-xl text-gray-800">Tasks</h2>
                </div>
              </NavLink>
            </article>
            <NavLink
              to="/dashboard"
              className="w-full h-36 flex rounded-lg drop-shadow-md hover:drop-shadow-lg bg-gray-100 cursor-pointer"
            >
              <div className="ml-4 flex gap-1 items-center">
                <i className="fa-solid fa-gauge"></i>
                <h2 className="font-medium text-xl text-gray-800">Dashboard</h2>
              </div>
            </NavLink>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
