import { useEffect } from "react";

const Settings = ({ 
  activePage, 
  setActivePage,  
  setShowSideBar,
  showSideBar 
}) => {
  useEffect(() => {
    setActivePage("/settings");
    setShowSideBar(false);
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200 dark:bg-containerDark"></section>
    </>
  );
};

export default Settings;
