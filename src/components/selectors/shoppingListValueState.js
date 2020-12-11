import {atom} from 'recoil'
import { shoppingListState } from '../atoms/shoppingListState';

export const shoppingListValueState = atom({
  key: 'shoppingListValueState',
  get: ({get}) => {
    const shoppingList = get(shoppingListState);
    return shoppingList.length;
  },
  default: 0
  });