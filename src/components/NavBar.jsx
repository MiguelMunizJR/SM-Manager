import ButtonNew from "../utilities/ButtonNew";
import ListNav from "../utilities/ListNav";

const NavBar = () => {
  return (
    <nav className="w-56 h-screen pt-5 flex flex-col items-center justify-between bg-navBar drop-shadow-2xl shadow-black">
      <section className="w-full flex flex-col justify-between">
        <h1 className="w-full pb-5 flex justify-center  text-gray-200 text-xl font-semibold font-default">
        CRUD Manager
        </h1>
        <ListNav />
      </section>
      <ButtonNew />
    </nav>
  );
};

export default NavBar;