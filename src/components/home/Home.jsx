import { useEffect } from "react";

const Home = ({ activePage, setActivePage }) => {
  useEffect(() => {
    setActivePage("/");
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col justify-between bg-zinc-200 dark:bg-containerDark"></section>
    </>
  );
};

export default Home;
