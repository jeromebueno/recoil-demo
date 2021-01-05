import React from "react";
import { useRecoilState } from "recoil";
import { categoryFilter } from "../../state/selectors/categoryFilter";
import CategoryCard from "../ui/Category";

function Category({ name }) {
  const [isActive, toggle] = useRecoilState(categoryFilter(name));

  return <CategoryCard name={name} isActive={isActive} toggle={toggle} />;
}

export default Category;
