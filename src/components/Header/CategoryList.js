import React from "react";
import Category from "../Category";
import { selectCategories } from "../../state/selectors/categories";
import { useRecoilValue } from "recoil";
import { FormGroup, FormLabel, Grid } from "@material-ui/core";

function CategoryList() {
  const categories = useRecoilValue(selectCategories);
  return (
    <FormGroup>
      <FormLabel>Select one or more categories..</FormLabel>
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

export default CategoryList;
