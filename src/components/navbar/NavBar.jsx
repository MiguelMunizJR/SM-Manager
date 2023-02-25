import ListNav from "../../utilities/navbar/ListNav";

const NavBar = () => {
  return (
    <nav className="fixed mt-14 w-48 h-screen flex-col items-center justify-between bg-gray-50 shadow-sm z-40 -translate-x-44">
      <section className="w-full flex flex-col justify-between text-gray-700">
        <article className="w-full min-h-max py-4 pl-4 flex items-center gap-3 font-default bg-gray-800 drop-shadow-sm">
          <i className="fa-regular fa-circle-user text-3xl text-gray-500"></i>
          <div className="flex flex-col">
            <small className="text-xs font-bold text-gray-400">Name:</small>
            <span className="font-medium text-gray-100">{"Miguel Muñiz"}</span>
          </div>
        </article>
        <ListNav />
      </section>
    </nav>
  );
};

export default NavBar;
