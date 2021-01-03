import { selector } from "recoil";
import { categoryFilters } from "../atoms/categoryFilters";
import { searchText } from "../atoms/search";
import { allItems } from "../atoms/items";

export const selectFilteredItemIds = selector({
  key: "selectFilteredItemIds",
  get: async ({ get }) => {
    const categories = get(categoryFilters);
    const search = get(searchText);
    const items = await get(allItems());

    return items
      .filter((i) => {
        return !categories.length || categories.includes(i.cat);
      })
      .filter((i) => {
        return (
          !search.length || i.name.toLowerCase().includes(search.toLowerCase())
        );
      })
      .map(({ id }) => id);
  },
});
