import {
    RecoilRoot,
  } from 'recoil';
import AddItem from './AddItem';
import ItemList from './ItemList';
  

function ShoppingList() {
  return (
      <RecoilRoot>
          <AddItem/>
          <ItemList/>
      </RecoilRoot>
  );
}

export default ShoppingList;
