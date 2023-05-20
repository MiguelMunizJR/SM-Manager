// Dependencies
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
// Components & utils
import itemsHome from "../../utilities/home/itemsHome";
import { ROUTES_PATH } from "../../consts";

const HomeRender = ({ isLogin }) => {
  return (
    <>
      {itemsHome?.map((item, i) => (
        <NavLink
          key={item.id}
          to={isLogin ? item.route : ROUTES_PATH.LOGIN}
          className={item.className}
        >
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: i + 0.1 }}
            key={item.id}
          >
            <div className="py-1 px-4 flex gap-2 items-center">
              <i className={item.icon}></i>
              <h2 className="font-bold text-xl">{item.title}</h2>
              <div className="w-5/6 min-h-max absolute bottom-3 flex items-center font-semibold text-sm">
                <div className="w-full min-h-max flex items-center gap-2">
                  <i className="fa-solid fa-pie-chart"></i>
                  <small className="">
                    <span>4 </span>/ 20
                  </small>
                </div>
                <button className="transition-all duration-100 hover:scale-125">
                  <i className="fa-solid fa-long-arrow-right text-gray-100 text-2xl"></i>
                </button>
              </div>
            </div>
          </motion.article>
        </NavLink>
      ))}
    </>
  );
};

export default HomeRender;
