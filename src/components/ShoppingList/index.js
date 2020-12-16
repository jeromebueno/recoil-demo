import { Suspense } from 'react';
import {
    RecoilRoot,
  } from 'recoil';
import AddItem from './AddItem';
import ItemList from './ItemList';
  

function ShoppingList() {
  return (
      <RecoilRoot>
          <AddItem/>
          <Suspense fallback={<div>Loading list...</div>}>
            <ItemList/>
          </Suspense>
          
      </RecoilRoot>
  );
}

export default ShoppingList;
