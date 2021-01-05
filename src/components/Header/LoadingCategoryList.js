import React from "react";
import { Container, LinearProgress } from "@material-ui/core";

const LoadingCategoryList = () => {
  return (
    <Container style={{ height: 82, padding: 41 }}>
      <LinearProgress color="secondary" />
    </Container>
  );
};

export default LoadingCategoryList;
