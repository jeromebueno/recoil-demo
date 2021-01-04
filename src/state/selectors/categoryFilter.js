import { selectorFamily } from "recoil";
import { categoryFilters } from "../atoms/categoryFilters";

export const categoryFilter = selectorFamily({
  key: "selectCategoryFilter",
  get: (catName) => ({ get }) => {
    const existingFilters = get(categoryFilters);
    return existingFilters.includes(catName);
  },
  set: (catName) => ({ set }) => {
    set(categoryFilters, (existingFilters) => {
      if (!existingFilters.includes(catName)) {
        return [...existingFilters, catName];
      }
      return existingFilters.filter((filter) => filter !== catName);
    });
  },
});
