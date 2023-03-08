import ListNav from "./ListNav";

const NavBar = ({ activePage, userSession }) => {
  return (
    <>
      {!activePage?.includes("/auth/") ? (
        <nav className="fixed w-48 min-h-screen flex-col items-center justify-between bg-gray-50 lg:bg-gray-200 shadow-sm z-40 -translate-x-44">
          <article className="w-full h-44 bg-gray-200"></article>
          <div className="w-full h-screen flex">
            <ListNav userSession={userSession} />
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
