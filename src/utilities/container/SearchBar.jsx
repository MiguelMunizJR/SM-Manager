import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <article className="hidden md:flex ml-10 w-1/3 items-center">
      <span className="absolute flex items-center">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="hidden md:flex md:w-8 md:h-8 md:pl-2 text-slate-400 dark:text-gray-500"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Search for users..."
        className="dark:placeholder:text-gray-500 dark:bg-gray-800 dark:text-gray-300 md:h-8 md:w-full pl-10 bg-gray-100 rounded shadow-sm shadow-gray-300 dark:shadow-black dark:shadow-sm dark:hover:shadow-black outline-none text-md font-default font-light text-gray-600 transition ease-in-out duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-itemsNavH hover:shadow-lg dark:hover:shadow-md"
      />
    </article>
  );
};

export default SearchBar;
