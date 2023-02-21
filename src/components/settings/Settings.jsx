import { useEffect } from "react";
import TimelineNav from "../../utilities/container/TimelineNav";

const Dashboard = ({
  setActivePage,
  setShowSideBar,
}) => {
  useEffect(() => {
    setActivePage("/settings");
    setShowSideBar(false);
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        <TimelineNav actualPage="Settings" actualIcon="fa-solid fa-gear" prevPag="Home" prevIcon="fa-solid fa-home" />
        <section className="pl-4 font-default text-gray-800">
          CONTENT HERE
        </section>
      </section>
    </>
  );
};

export default Dashboard;
