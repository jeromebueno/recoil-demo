import React from "react";
import Item from "../Item";
import { useRecoilValue } from "recoil";
import { selectFilteredItemIds } from "../../state/selectors/filteredItemIds";

function Grocery() {
  const items = useRecoilValue(selectFilteredItemIds);
  return (
    <div className="items">
      {items.map((id) => (
        <Item key={id} id={id} />
      ))}
    </div>
  );
}

export default Grocery;
