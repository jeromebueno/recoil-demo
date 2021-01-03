import { Typography, Container } from "@material-ui/core";
import React from "react";
import CartItem from "../CartItem";

const CartOverview = () => {
  const items = [];
  const total = "TODO";
  return (
    <>
      <Container>
        {items.map((i) => (
          <CartItem key={i.id} id={i.id} />
        ))}
      </Container>
      <Typography>{total}</Typography>
    </>
  );
};

export default CartOverview;
