import ButtonNavBar from "../../utilities/navbar/ButtonNavBar";
import ListNav from "../../utilities/navbar/ListNav";

const NavBar = ({ setIsShowForm, setUpdate }) => {
  return (
    <nav className="hidden md:flex md:w-52 h-screen pt-5 flex-col items-center justify-between bg-navBar dark:bg-navBarDark dark:drop-shadow-2xl drop-shadow-2xl shadow-black">
      <section className="w-full flex flex-col justify-between">
        <h1 className="w-full pb-5 flex justify-center  text-gray-100 text-xl font-default">
          CRUD Manager
        </h1>
        <ListNav />
      </section>
      <ButtonNavBar setIsShowForm={setIsShowForm} setUpdate={setUpdate} />
    </nav>
  );
};

export default NavBar;
