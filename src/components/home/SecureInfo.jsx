const SecureInfo = () => {
  return (
    <article className="w-full md:mx-auto md:w-5/6 lg:max-w-2xl md:rounded-sm min-h-max shadow-lg py-4 bg-gray-700">
      <div className="w-5/6 min-h-max mx-auto flex flex-col gap-3 font-default text-gray-100 text-center">
        <h4 className="text-xl font-bold">Secure</h4>
        <p className="text-sm font-medium">
          We believe in total user privacy. Your data belongs to you and only
          you.
        </p>
      </div>
      <div className="w-full min-h-max mt-4 flex gap-3 font-default text-gray-100">
        <div className="w-full min-h-max flex flex-col justify-center items-center font-default text-gray-100">
          <span className="font-bold text-gray-100 text-2xl">1M+</span>
          <p className="font-medium text-gray-300 text-sm">SM users</p>
        </div>
        <div className="w-full min-h-max flex flex-col justify-center items-center font-default text-gray-100">
          <div className="min-h-max flex items-center justify-center gap-3">
            <span className="font-bold text-gray-100 text-2xl">4.5</span>
            <img
              src="https://i.postimg.cc/50VRHzkC/estrella-removebg-preview.png"
              alt="star-icon"
              className="w-8 object-cover pb-1"
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
