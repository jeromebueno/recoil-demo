import { selector } from "recoil";
import { categoryFilters } from "../atoms/categoryFilters";
import { searchText } from "../atoms/search";
import { allItems } from "../atoms/items";

export const visibleItemsIds = selector({
  key: "visibleItemsIds",
  get: async ({ get }) => {
    const categories = get(categoryFilters);
    const search = get(searchText);
    const items = await get(allItems);

    return items
      .filter(filterByCat(categories))
      .filter(filterbyText(search))
      .map(({ id }) => id);
  },
});

const filterByCat = (categories) => (item) => {
  return !categories.length || categories.includes(item.cat);
};

const filterbyText = (text) => (item) => {
  return !text.length || item.name.toLowerCase().includes(text.toLowerCase());
};
