import React from "react";
import ItemList from "./ItemList";
import { Container } from "@material-ui/core";
import Header from "../Header";

const GroceryContainer = () => {
  return (
    <Container>
      <Header />
      <React.Suspense fallback={<div>Loading shop...</div>}>
        <ItemList />
      </React.Suspense>
    </Container>
  );
};

export default GroceryContainer;
