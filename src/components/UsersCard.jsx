import UsersList from "../utilities/UsersList";

const CardContainer = () => {

  return (
    <section className="w-5/6 h-4/6 mb-10 flex flex-col justify-center gap-6">
      <div className="flex items-center">
        <h2 className="font-default text-3xl font-normal">Users</h2>
        <i className="fa-solid fa-users pl-2 text-md"></i>
      </div>
      <article className="w-full h-5/6 bg-gray-100 drop-shadow-sm rounded-md">
        <UsersList />
      </article>
    </section>
  );
};

export default CardContainer;
