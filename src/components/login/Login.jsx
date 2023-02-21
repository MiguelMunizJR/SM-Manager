import Header from "../container/Header";

const Login = ({ setShowSideBar, showSideBar, activePage }) => {
  return (
    <>
      <section className="w-full h-screen flex flex-col bg-gray-50">
        <Header setShowSideBar={setShowSideBar}
          showSideBar={showSideBar} activePage={activePage} />
        <article className="pl-4 font-default text-gray-800">
          <div className="mt-4 flex gap-2 font-default text-lg font-medium text-gray-600">
            <i className="fa-solid fa-house text-base"></i>
            <h2>Home</h2>
          </div>
          <h4 className="mt-5 text-xl font-medium text-blue-600">
            Welcome, <span className="text-gray-800">Junior</span>
          </h4>
          <h2 className="mt-2 pl-4 font-medium text-xl text-gray-700">
            Manage your <span className="text-blue-600">clients</span> or{" "}
            <span className="text-blue-600">tasks</span> for your day-to-day
            operations
          </h2>
        </article>
        <section className="w-11/12 min-h-max mt-7 mx-auto flex flex-col gap-10 font-default">
          <h1>Hola</h1>
        </section>
      </section>
    </>
  );
};

export default Login;