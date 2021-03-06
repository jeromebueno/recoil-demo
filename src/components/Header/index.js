import React from "react";
import SearchBar from "../SearchBar";
import { Typography, Container } from "@material-ui/core";
import CategoryList from "./CategoryList";
import LoadingCategoryList from "./LoadingCategoryList";

function Header() {
  return (
    <Container className="header">
      <Typography variant="h3" component="h1">
        Welcome to Henri Pottier's Grocery !
      </Typography>
      <React.Suspense fallback={<LoadingCategoryList />}>
        <CategoryList />
      </React.Suspense>
      <SearchBar />
    </Container>
  );
}

export default Header;
