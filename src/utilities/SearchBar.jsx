import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleInput}
      placeholder="Search for users..."
      className="ml-12 pl-4 w-2/6 h-10 bg-gray-100 rounded shadow-sm shadow-gray-300 outline-none font-default font-medium text-gray-600 placeholder:text-slate-400 focus:ring-2 focus:ring-itemsNavH"
    />
  );
};

export default SearchBar;
