import { selector } from "recoil";
import { getShoppingList } from "../../api/shopping-list";

export const currentShoppingListState = selector({
  key: "currentShoppingListState",
  get: async ({ get }) => {
    const response = await getShoppingList();
    return response;
  },
});
