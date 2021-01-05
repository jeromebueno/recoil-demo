import React from "react";
import { useSetRecoilState } from "recoil";
import { searchText } from "../../state/atoms/search";
import SearchBarUI from "../ui/Searchbar";

function SearchBar() {
  const setSearch = useSetRecoilState(searchText);

  return <SearchBarUI setSearch={setSearch} />;
}

export default SearchBar;
