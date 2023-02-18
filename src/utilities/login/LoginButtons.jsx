import React from "react";

const LoginButtons = () => {
  return (
    <article className="w-full py-2 mr-4 flex gap-3 items-center justify-end font-default">
      <button className="px-2 py-2 text-gray-600 text-sm font-medium ring-2 ring-blue-500 rounded-md cursor-pointer">
        Login
      </button>
      <button className="px-2 py-2 text-gray-50 text-sm bg-blue-500 rounded-md cursor-pointer">
        Sign up
      </button>
    </article>
  );
};

export default LoginButtons;
