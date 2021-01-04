import React from "react";
import Category from "../Category";
import { FormGroup, FormLabel, Grid } from "@material-ui/core";

function CategoryListUI({ categories }) {
  return (
    <FormGroup>
      <FormLabel>Select one or more categories..</FormLabel>
      <br />
      <Grid container justify="space-around">
        {categories.map((cat) => (
          <Grid item key={cat}>
            <Category key={cat} name={cat} />
          </Grid>
        ))}
      </Grid>
    </FormGroup>
  );
}

export default CategoryListUI;
