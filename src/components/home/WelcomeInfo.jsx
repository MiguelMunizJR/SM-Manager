const WelcomeInfo = ({ userSession }) => {
  return (
    <>
      <header className="w-full md:hidden md:mx-auto min-h-max py-4">
        <article className="font-default text-gray-800 pl-4">
          {userSession ? (
            <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl lg:text-3xl font-semibold">
              <h4 className="text-blue-700">Welcome back,</h4>
              <span className="text-gray-800">
                {userSession
                  ? userSession?.firstName.charAt(0).toUpperCase() +
                    userSession?.firstName.slice(1)
                  : null}
                !
              </span>
            </div>
          ) : (
            <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl font-semibold">
              <h4 className="text-gray-800">
                Welcome to <span className="text-blue-700">SM Manager!</span>
              </h4>
            </div>
          )}
        </article>
        <article className="w-11/12 min-h-max mx-auto flex justify-center items-center">
          <h2 className="my-5 font-semibold text-3xl text-center text-gray-800">
            Organize your your work and your life.
          </h2>
        </article>
      </header>
      {/* Home Hero */}
      <section className="w-full h-72 pl-10 bg-[url('https://i.postimg.cc/G2xq1P35/pexels-pixabay-265685.jpg')] mb-8 hidden md:flex shadow-md bg-cover bg-center items-center">
        <h1 className="py-2 font-default text-4xl lg:text-5xl font-semibold drop-shadow-sm">
          <span className="py-1 px-2 rounded-md bg-blue-700 text-gray-50 font-bold drop-shadow-md">
            SM
          </span>{" "}
          Manager
        </h1>
      </section>
    </>
  );
};

export default WelcomeInfo;
