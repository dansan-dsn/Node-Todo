import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div>
      <form action="">
        <label
          htmlFor="search"
          className="input input-bordered flex items-center gap-2"
        >
          <input type="text" id="search" placeholder="Search your todos..." />
          <CiSearch />
        </label>
      </form>
    </div>
  );
};

export default Search;
