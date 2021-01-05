import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";

function CategoryCard({ isActive, toggle, name }) {
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

export default CategoryCard;
