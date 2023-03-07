import ListNav from "../../utilities/navbar/ListNav";

const NavBar = () => {
  return (
    <nav className="fixed mt-14 w-48 h-screen flex-col items-center justify-between bg-gray-50 shadow-sm z-40 -translate-x-44">
      <div className="w-full h-screen flex mt-12">
        <ListNav />
      </div>
    </nav>
  );
};

export default NavBar;
