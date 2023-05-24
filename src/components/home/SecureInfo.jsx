const SecureInfo = () => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-center md:rounded-lg shadow-lg py-4 bg-gradient-to-tr from-gray-700 to-gray-800">
      <div className="w-full min-h-max px-4 mx-auto flex flex-col gap-2 font-default text-gray-50">
        <h4 className="text-xl lg:text-2xl font-semibold">Secure</h4>
        <p className="text-sm lg:text-base font-medium text-gray-300">
          We believe in total user privacy. Your data belongs to you and only
          you.
        </p>
      </div>
      <div className="w-full min-h-max mt-6 flex gap-3 font-default text-gray-100">
        <div className="w-full min-h-max flex flex-col justify-center items-center font-default text-gray-100">
          <span className="font-semibold text-gray-100 text-2xl">1M+</span>
          <p className="font-medium text-gray-300 text-sm">SM users</p>
        </div>
        <div className="w-full min-h-max flex flex-col justify-center items-center font-default text-gray-100">
          <div className="min-h-max flex items-center justify-center gap-3">
            <span className="font-semibold text-gray-100 text-2xl">4.5</span>
            <img
              src="https://i.postimg.cc/HsR5vt90/estrella-removebg-preview.png"
              alt="star-icon"
              className="w-6 object-cover pb-1"
              draggable={false}
            />
          </div>
          <p className="font-medium text-gray-300 text-sm">Secure rating</p>
        </div>
      </div>
    </article>
  );
};

export default SecureInfo;
