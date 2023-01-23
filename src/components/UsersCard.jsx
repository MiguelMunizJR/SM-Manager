import UsersList from "../utilities/UsersList";


const UsersCard = () => {

  return (
    <section className="w-5/6 h-4/6 mb-10 flex flex-col justify-center gap-6">
      <div className="flex items-center">
        <h2 className="font-default text-3xl font-normal">Users</h2>
        <i className="fa-solid fa-users pl-2 text-md"></i>
      </div>
      <article className="w-full h-5/6 bg-gray-100 drop-shadow-md rounded-md">
        <header className="w-5/6 mt-4 flex justify-around text-slate-500">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Firstname</h4>
          <h4>Lastname</h4>
          <h4>Birthday</h4>
        </header>
        <body>
          <UsersList />
        </body>
      </article>
    </section>
  );
};

export default UsersCard;
