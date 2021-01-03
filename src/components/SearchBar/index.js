import React from "react";
import { TextField } from "@material-ui/core";
import { useSetRecoilState } from "recoil";
import { searchText } from "../../state/atoms/search";

function SearchBar() {
  const setSearch = useSetRecoilState(searchText);

  return (
    <TextField
      onChange={(e) => setSearch(e.target.value)}
      label="What are you looking for ?"
    />
  );
}

export default SearchBar;
