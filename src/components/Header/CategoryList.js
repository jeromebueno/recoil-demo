import React from "react";
import Category from "../Category";
import { selectCategories } from "../../state/selectors/categories";
import { useRecoilValue } from "recoil";

function CategoryList() {
  const categories = useRecoilValue(selectCategories);
  return (
    <>
      {categories.map((cat) => (
        <Category key={cat} name={cat} />
      ))}
    </>
  );
}

export default CategoryList;
