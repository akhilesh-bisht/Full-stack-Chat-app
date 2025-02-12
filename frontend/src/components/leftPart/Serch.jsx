import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

function Search({ search, setsearch }) {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[90%]">
        <FaSearch className="absolute left-3 top-3 text-gray-500 text-sm" />
        <input
          value={search || ""}
          onChange={(e) => setsearch(e.target.value)}
          className="w-full bg-black text-gray-300 px-10 rounded-lg text-sm py-2 shadow-xl border-b-2 border-white focus:outline-none focus:bg-black focus:border-green-500"
          type="search"
          placeholder="Search or start a new chat"
            aria-label="Search chats"
        />
      </div>
    </div>
  );
}

export default Search;
