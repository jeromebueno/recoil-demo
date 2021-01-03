import { useCallback } from "react";
import { atom, useSetRecoilState } from "recoil";

export const categoryFilters = atom({
  key: "categoryFilters",
  default: [],
  effects_UNSTABLE: [
    ({ onSet, setSelf, resetSelf }) => {
      onSet((newValue, oldValue) => {
        if (!newValue.length) {
          document.title = "Henri Pottier's Grocery";
        } else {
          document.title = `Henri Pottier's Grocery | ${newValue.join(", ")}`;
        }
      });
    },
  ],
});

export const useToggleCategory = (catName) => {
  const setFilters = useSetRecoilState(categoryFilters);
  return () =>
    setFilters((existingFilters) => {
      if (!existingFilters.includes(catName)) {
        return [...existingFilters, catName];
      }
      return existingFilters.filter((cat) => cat !== catName);
    });
};
