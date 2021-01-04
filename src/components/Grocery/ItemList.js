import React from "react";
import Item from "../Item";
import { useRecoilValue } from "recoil";
import { visibleItemsIds } from "../../state/selectors/visibleItemsIds";
import { Grid } from "@material-ui/core";

function Grocery() {
  const items = useRecoilValue(visibleItemsIds);
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
