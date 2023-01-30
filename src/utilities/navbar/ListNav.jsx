import itemsNav from "./itemsNav";

const ListNav = () => {
  return (
    <section className="w-full flex flex-col">
      <ul className="w-full flex flex-col list-none">
        {itemsNav?.map((item) => (
          <li
            key={item.id}
            className="w-full py-2 px-8 flex items-center text-gray-200 dark:text-gray-300 font-default text-base font-extralight gap-3 cursor-pointer transition-all duration-75 ease-in hover:bg-itemsNav dark:hover:bg-itemsNavDark first:bg-itemsNav dark:first:bg-itemsNavDark"
          >
            <i className={item.icon}></i>
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ListNav;
