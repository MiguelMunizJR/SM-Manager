import { useEffect } from "react";

const Settings = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("/settings");
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200 dark:bg-containerDark"></section>
    </>
  );
};

export default Settings;
