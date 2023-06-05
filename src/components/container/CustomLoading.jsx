const CustomLoading = ({ className, spinSize }) => {
  return (
    <div className={className}>
      <div className={`${spinSize} rounded-full border-y-2 border-x-2 border-t-blue-500 animate-reload`}></div>
    </div>
  );
};

export default CustomLoading;