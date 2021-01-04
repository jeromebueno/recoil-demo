import { atomFamily } from "recoil";
import { getItems } from "../../api/shopping-list";

export const allItems = atomFamily({
  key: "allItems",
  default: () => getItems(),
});
