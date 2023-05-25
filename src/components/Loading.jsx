const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed z-50 bg-gray-200">
      <div className="w-14 h-14 rounded-full border-y-4 border-x-4 border-t-blue-500 animate-spin"></div>
    </div>
  );
};

export default Loading;
