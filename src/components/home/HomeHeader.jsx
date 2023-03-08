const HomeHeader = ({ userSession }) => {
  return (
    <>
      <header className="font-default text-gray-800 pl-4">
        {userSession ? (
          <div className="flex gap-1 items-center mt-5 text-xl font-medium">
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
          <div className="flex gap-1 items-center mt-5 text-xl font-medium">
            <h4 className="text-gray-700">
              Welcome to <span className="text-blue-700">SM Manager!</span>
            </h4>
          </div>
        )}
      </header>
      <article className="w-11/12 min-h-max mx-auto flex justify-center items-center">
        <h2 className="mt-4 font-semibold text-3xl text-gray-800">
          Organize your your work and your life.
        </h2>
      </article>
    </>
  );
};

export default HomeHeader;
