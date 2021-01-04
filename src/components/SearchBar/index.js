import React from "react";
import { FormGroup, TextField } from "@material-ui/core";
import { useSetRecoilState } from "recoil";
import { searchText } from "../../state/atoms/search";

function SearchBar() {
  const setSearch = useSetRecoilState(searchText);

  return (
    <FormGroup>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        label="What are you looking for ?"
        margin="normal"
      />
    </FormGroup>
  );
}

export default SearchBar;
