import ListNav from "../../utilities/navbar/ListNav";

const NavBar = () => {
  return (
    <nav className="fixed mt-12 w-48 h-screen pt-6 flex-col items-center justify-between bg-gray-50 shadow-sm z-40 -translate-x-48">
      <section className="w-full flex flex-col justify-between text-gray-700">
        <ListNav />
      </section>
    </nav>
  );
};

export default NavBar;
