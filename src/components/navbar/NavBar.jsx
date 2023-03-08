import ListNav from "./ListNav";

const NavBar = ({ activePage, userSession }) => {
  return (
    <>
      {!activePage?.includes("/auth/") ? (
        <nav className="fixed w-48 min-h-screen flex-col items-center justify-between bg-gray-50 lg:bg-gray-200 shadow-sm z-40 -translate-x-44">
          <article className="w-full h-44 bg-gray-200"></article>
          <div className="w-full h-screen flex">
            {userSession ? (
              <ListNav userSession={userSession} />
            ) : (
              <h5 className="w-full h-20 py-5 px-6 flex items-center gap-3 transition-all duration-75 ease-in bg-blue-700 text-lg font-normal text-gray-50">
                <i className="fa-solid fa-home"></i>
                <h4>Home</h4>
              </h5>
            )}
          </div>
        </nav>
      ) : null}
    </>
  );
};

export default NavBar;
