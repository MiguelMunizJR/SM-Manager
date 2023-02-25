import ListNav from "../../utilities/navbar/ListNav";

const NavBar = ({ userSession }) => {
  return (
    <nav className="fixed mt-14 w-48 h-screen flex-col items-center justify-between bg-gray-50 shadow-sm z-40 -translate-x-44">
      <section className="w-full flex flex-col justify-between text-gray-700">
        <article className="w-full min-h-max py-4 pl-4 flex items-center gap-3 font-default bg-gray-100 drop-shadow-sm">
          <i className="fa-regular fa-circle-user text-3xl text-gray-600"></i>
          <div className="flex flex-col">
            <small className="text-xs font-bold text-gray-400">Name:</small>
            <span className="font-medium text-gray-600">
              {userSession
                ? userSession?.firstName.charAt(0).toUpperCase() +
                  userSession?.firstName.slice(1)
                : null}
            </span>
          </div>
        </article>
        <ListNav />
      </section>
    </nav>
  );
};

export default NavBar;
