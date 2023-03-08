const HomeHeader = ({ userSession }) => {
  return (
    <>
      <header className="w-full md:hidden md:mx-auto min-h-max py-4">
        <article className="font-default text-gray-800 pl-4">
          {userSession ? (
            <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl lg:text-3xl font-medium">
              <h4 className="text-blue-700">Hello,</h4>
              <span className="text-gray-800">
                {userSession
                  ? userSession?.firstName.charAt(0).toUpperCase() +
                    userSession?.firstName.slice(1)
                  : null}
                !
              </span>
            </div>
          ) : (
            <div className="flex gap-1 items-center mt-5 text-xl md:text-2xl font-medium">
              <h4 className="text-gray-700">
                Welcome to <span className="text-blue-700">SM Manager!</span>
              </h4>
            </div>
          )}
        </article>
        <article className="w-11/12 min-h-max mx-auto flex justify-center items-center">
          <h2 className="my-5 font-semibold text-3xl text-gray-800">
            Organize your your work and your life.
          </h2>
        </article>
      </header>
      <section className="w-full h-80 mb-8 hidden md:flex bg-red-300 shadow-md">
        <img
          src="https://i.postimg.cc/G2xq1P35/pexels-pixabay-265685.jpg"
          alt="hero-image"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </section>
    </>
  );
};

export default HomeHeader;
