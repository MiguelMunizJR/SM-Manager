import { useEffect } from "react";
import TimelineNav from "../../utilities/container/TimelineNav";

const Dashboard = ({
  setActivePage,
  setShowSideBar,
}) => {
  useEffect(() => {
    setActivePage("/dashboard");
    setShowSideBar(false);
  }, []);
  
  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        <TimelineNav 
          actualPage="Dashboard" 
          actualIcon="fa-solid fa-gauge" 
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
