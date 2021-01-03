import React from "react";
import { useToggleCategory } from "../../state/atoms/categoryFilters";

function SearchBar({ name }) {
  const toggleCat = useToggleCategory(name);
  return (
    <div onClick={toggleCat} className="category">
      {name}
    </div>
  );
}

export default SearchBar;
