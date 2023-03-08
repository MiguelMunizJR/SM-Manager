import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import itemsHome from "../../utilities/home/itemsHome";

const HomeRender = ({ userSession }) => {
  return (
    <>
      {itemsHome.map((item, i) => (
        <motion.article
          className={item.className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: i + 0.1 }}
          key={item.id}
        >
          <NavLink
            to={userSession ? item.route : "/auth/login"}
          >
            <div className="py-1 px-4 flex gap-2 items-center">
              <i className={item.icon}></i>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <div className="w-5/6 min-h-max absolute bottom-3 flex items-center font-semibold text-sm">
                <div className="w-full min-h-max flex items-center gap-2">
                  <i className="fa-solid fa-pie-chart"></i>
                  <small className="">
                    <span>{}4 </span>/ 20
                  </small>
                </div>
                <button className="transition-all duration-100 hover:scale-125">
                  <i className="fa-solid fa-long-arrow-right text-gray-100 text-2xl"></i>
                </button>
              </div>
            </div>
          </NavLink>
        </motion.article>
      ))}
    </>
  );
};

export default HomeRender;
