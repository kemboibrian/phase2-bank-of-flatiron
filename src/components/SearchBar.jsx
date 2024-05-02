import React from "react";

const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <i className="fa fa-search search-icon"></i>
    </div>
  );
};

export default SearchBar;
