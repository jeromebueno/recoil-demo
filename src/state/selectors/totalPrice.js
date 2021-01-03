import { selector } from "recoil";
import { cart } from "../atoms/cart";
import { allItems } from "../atoms/items";

export const selectTotalPrice = selector({
  key: "selectTotalPrice",
  get: async ({ get }) => {
    const itemIds = await get(cart());
    const items = await get(allItems());

    return itemIds.map((id) => items.find((item) => item.id === id));
  },
});
