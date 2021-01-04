import React from "react";
import { selectItem } from "../../state/selectors/item";
import { useRecoilValue } from "recoil";
import ItemUI from "../ui/Item";

const Item = ({ id }) => {
  const item = useRecoilValue(selectItem(id));

  return <ItemUI name={item.name} img={item.img} price={item.price} />;
};

export default Item;
