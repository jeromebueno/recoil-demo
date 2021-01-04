import React from "react";
import Item from "../Item";
import { useRecoilValue } from "recoil";
import { selectFilteredItemIds } from "../../state/selectors/filteredItemIds";
import { Grid } from "@material-ui/core";

function Grocery() {
  const items = useRecoilValue(selectFilteredItemIds);
  return (
    <Grid container>
      {items.map((id) => (
        <Grid item key={id}>
          <Item key={id} id={id} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Grocery;
