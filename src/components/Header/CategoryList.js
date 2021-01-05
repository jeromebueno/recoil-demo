import React from "react";
import { selectCategories } from "../../state/selectors/categories";
import { useRecoilValue } from "recoil";
import CategoryListUI from "../ui/CategoryList";

function CategoryList() {
  const categories = useRecoilValue(selectCategories);
  return <CategoryListUI categories={categories} />;
}

export default CategoryList;
