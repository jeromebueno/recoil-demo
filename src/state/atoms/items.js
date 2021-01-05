import { selector } from "recoil";
import { getItems } from "../../api/shopping-list";

export const allItems = selector({
  key: "allItems",
  get: async () => {
    const items = await getItems();
    return items;
  },
});
