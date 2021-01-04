import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { useRecoilState } from "recoil";
import { categoryFilter } from "../../state/selectors/categoryFilter";

function Category({ name }) {
  const [isActive, toggle] = useRecoilState(categoryFilter(name));
  return (
    <ToggleButton
      value="check"
      selected={isActive}
      onChange={toggle}
      variant="primary"
    >
      {name}
    </ToggleButton>
  );
}

export default Category;
