import ListNav from "../../utilities/navbar/ListNav";

const NavBar = () => {
  return (
    <nav className="fixed lg:relative w-48 min-h-screen flex-col items-center justify-between bg-gray-50 lg:bg-gray-200 shadow-sm z-40 -translate-x-44 md:">
      <article className="w-full h-44 bg-gray-200">

      </article>
      <div className="w-full h-screen flex">
        <ListNav />
      </div>
    </nav>
  );
};

export default NavBar;
