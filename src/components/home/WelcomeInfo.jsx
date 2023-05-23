const WelcomeInfo = ({ userSession }) => {
  return (
    <>
      <header className="w-full min-h-max pt-6 flex flex-col gap-2">
        <article className="font-default text-gray-800 px-4">
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
            <div className="flex text-md md:text-2xl font-semibold">
              <h4 className="text-gray-700">
                Welcome to <span className="text-blue-700">SM Manager</span>
              </h4>
            </div>
          )}
        </article>
        <article className="w-full min-h-max px-4 flex items-center">
          <h2 className="font-bold text-3xl text-gray-900">
            Organize your work and your life.
          </h2>
        </article>
      </header>
    </>
  );
};

export default WelcomeInfo;
