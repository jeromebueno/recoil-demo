import { atom } from "recoil";

export const categoryFilters = atom({
  key: "categoryFilters",
  default: [],
  effects_UNSTABLE: [
    ({ onSet, setSelf, resetSelf }) => {
      onSet((newValue, oldValue) => {
        if (!newValue.length) {
          document.title = "Henri Pottier's Grocery";
        } else {
          document.title = `${newValue.join(", ")} | Henri Pottier's Grocery`;
        }
      });
    },
  ],
});
