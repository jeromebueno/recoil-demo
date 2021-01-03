import { selector } from "recoil";
import { allItems } from "../atoms/items";

export const selectCategories = selector({
  key: "selectCategories",
  get: async ({ get }) => {
    const items = await get(allItems());

    return Array.from(new Set(items.map(({ cat }) => cat)));
  },
});
