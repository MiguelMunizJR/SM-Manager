import ButtonNewUser from "../utilities/ButtonNewUser";

const HeaderUser = () => {
  return (
    <section className="mr-8 flex justify-center items-center gap-14">
      <ButtonNewUser />
      <article className="flex justify-center items-center gap-4">
        <button className="px-4 py-1 bg-gray-100 rounded-lg drop-shadow-sm hover:drop-shadow-md">
          <i className="fa-solid fa-moon text-gray-700 text-xl"></i>
        </button>
        <button className="px-2 py-1 flex justify-center items-center gap-2 rounded-lg bg-gray-100 drop-shadow-sm hover:drop-shadow-md">
          <p className="font-default font-medium text-gray-500">Guest#2553</p>
          <div className="flex gap-1 items-center">
            <i className="fa-regular fa-circle-user text-gray-500 text-2xl"></i>
            <i className="fa-solid fa-caret-down text-gray-600 text-sm"></i>
          </div>
        </button>
      </article>
    </section>
  );
};

export default HeaderUser;
