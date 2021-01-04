import React from "react";
import { FormGroup, TextField } from "@material-ui/core";

function SearchBarUI({ setSearch }) {
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

export default SearchBarUI;
