import { atomFamily } from "recoil";
import { getCart } from "../../api/shopping-list";

export const cart = atomFamily({
  key: "cart",
  default: () => getCart(),
});
