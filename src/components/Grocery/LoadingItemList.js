import React from "react";
import { Container, LinearProgress } from "@material-ui/core";

const LoadingItemList = () => {
  return (
    <Container style={{ height: 500, padding: 250 }}>
      <LinearProgress />
    </Container>
  );
};

export default LoadingItemList;
