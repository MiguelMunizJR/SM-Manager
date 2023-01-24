import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <article className="ml-12 w-1/3 flex items-center">
      <span className="absolute flex items-center">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 pl-2 text-slate-400"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="Search for users..."
        className="h-8 w-full pl-10 bg-gray-100 rounded shadow-sm shadow-gray-300 outline-none text-md font-default font-light text-gray-600 transition ease-in-out duration-150 placeholder:text-slate-400 focus:ring-2 focus:ring-itemsNavH hover:shadow"
      />
    </article>
  );
};

export default SearchBar;
