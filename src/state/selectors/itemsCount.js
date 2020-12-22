import { selector } from "recoil";
import { shoppingListState } from "../atoms/shoppingListState";

export const itemsCountSelector = selector({
  key: "itemsCountSelector",
  get: ({ get }) => {
    const shoppingList = get(shoppingListState);
    return shoppingList.length;
  },
  default: 0,
});
