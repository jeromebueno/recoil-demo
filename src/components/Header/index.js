import React from "react";
import SearchBar from "../SearchBar";
import { Typography, Container } from "@material-ui/core";
import CategoryList from "./CategoryList";

function Header() {
  return (
    <Container className="header">
      <Typography variant="h3" component="h1">
        Welcome to Henri Pottier's Grocery
      </Typography>
      <SearchBar />
      <React.Suspense fallback={"Loading Categories..."}>
        <CategoryList />
      </React.Suspense>
    </Container>
  );
}

export default Header;
