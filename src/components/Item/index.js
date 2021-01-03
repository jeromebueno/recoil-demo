import React from "react";
import { selectItem } from "../../state/selectors/item";
import { useRecoilValue } from "recoil";

const Item = ({ id }) => {
  const item = useRecoilValue(selectItem(id));

  return (
    <div className="item">
      <img src={item.img} alt="item" />
      <span>{item.name}</span>
      <span>{item.cat}</span>
      <span>Add to cart : {item.price}</span>
    </div>
  );
};

export default Item;
