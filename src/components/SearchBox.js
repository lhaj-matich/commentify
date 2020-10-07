import React from "react";
import "./../containers/Style.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        type="search"
        onChange={onSearchChange}
        placeholder="search..."
        className="searchBox"
      />
    </div>
  );
};

export default SearchBox;
