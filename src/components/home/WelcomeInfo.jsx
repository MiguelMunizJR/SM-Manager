const WelcomeInfo = () => {
  return (
    <>
      <section className="w-full min-h-max pt-6 flex flex-col gap-2">
        <article className="font-default text-gray-800">
          <div className="flex text-md md:text-xl font-semibold">
            <h4 className="text-gray-700">
                Welcome to <span className="text-blue-700">SM Manager</span>
            </h4>
          </div>
        </article>
        <article className="w-full min-h-max flex items-center">
          <h2 className="flex flex-col gap-3 font-semibold text-2xl md:text-3xl text-gray-800">
          Control your customers and simplify your tasks with ease
            <span className="text-blue-700 font-bold text-2xl md:text-3xl">Your ally for efficient management!</span>
          </h2>
        </article>
      </section>
    </>
  );
};

export default WelcomeInfo;
