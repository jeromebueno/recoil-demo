import { selectorFamily } from "recoil";
import { allItems } from "../atoms/items";

export const selectItem = selectorFamily({
  key: "selectItem",
  get: (id) => async ({ get }) => {
    const items = await get(allItems);

    return items.find((i) => i.id === id) ?? [];
  },
});
