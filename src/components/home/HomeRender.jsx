// Dependencies
import { NavLink } from "react-router-dom";
// Components & utils
import itemsHome from "../../utilities/home/itemsHome";
import { ROUTES_PATH } from "../../consts";

const HomeRender = ({ isLogin, clientsCounter, tasksCounter }) => {
  
  return (
    <>
      {itemsHome?.map((item) => (
        <NavLink
          key={item.id}
          to={isLogin ? item.route : ROUTES_PATH.LOGIN}
          className={item.className}
        >
          <article key={item.id}>
            <div className="py-1 px-4 flex gap-2 items-center">
              <i className={item.icon}></i>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <div className="w-5/6 min-h-max absolute bottom-3 flex items-center font-semibold text-md">
                <div className="w-full min-h-max flex items-center gap-2">
                  {item.title === "Clients" ? (
                    <>
                      <i className="fa-solid fa-users"></i>
                      <p>{clientsCounter}</p>
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-list-check"></i>
                      <p>{tasksCounter}</p>
                    </>
                  )}
                </div>
                <button>
                  <i className="fa-solid fa-long-arrow-right text-gray-100 text-2xl"></i>
                </button>
              </div>
            </div>
          </article>
        </NavLink>
      ))}
    </>
  );
};

export default HomeRender;
