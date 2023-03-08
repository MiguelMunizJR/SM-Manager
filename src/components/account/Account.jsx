import { useEffect } from "react";
import TimelineNav from "../container/TimelineNav";

const Dashboard = ({
  setActivePage,
  setShowSideBar,
}) => {
  useEffect(() => {
    setActivePage("/users/me");
    setShowSideBar(false);
  }, []);

  return (
    <>
      {/* Sidebar Animation */}
      <section className="w-full min-h-screen lg:mt-2 lg:ml-44 lg:pl-4 flex flex-col bg-gray-50">
        <TimelineNav 
          actualPage="Account" 
          actualIcon="fa-solid fa-user" 
          prevPag="Home" 
          prevIcon="fa-solid fa-home" 
        />
        <section className="pl-4 font-default text-gray-800">
          CONTENT HERE
        </section>
      </section>
    </>
  );
};

export default Dashboard;
