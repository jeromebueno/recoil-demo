import {selector} from 'recoil'
import { shoppingListState } from '../atoms/shoppingListState';

export const shoppingListValueState = selector({
  key: 'shoppingListValueState',
  get: ({get}) => {
    const shoppingList = get(shoppingListState);
    return shoppingList.length;
  },
  default: 0
});