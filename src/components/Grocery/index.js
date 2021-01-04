import React from "react";
import ItemList from "./ItemList";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import Header from "../Header";
import LoadingItemList from "./LoadingItemList";

const GroceryContainer = () => {
  return (
    <Container>
      <Header />
      <React.Suspense fallback={<LoadingItemList />}>
        <ItemList />
      </React.Suspense>
    </Container>
  );
};

export default GroceryContainer;
