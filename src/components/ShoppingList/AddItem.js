import {TextField, Button} from '@material-ui/core'
import { useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { shoppingListState } from '../atoms/shoppingListState';
import { shoppingListValueState } from '../selectors/shoppingListValueState';

function AddItem() {
  const [item, setItem] = useState("")
  const [shoppingList, setShoppingList] = useRecoilState(shoppingListState);
  const resetList = useResetRecoilState(shoppingListState);
  const numberOfItem = useRecoilValue(shoppingListValueState)

  const handleAdd = () => {
    setShoppingList((shoppingList) => [...shoppingList, {name: item}])
    setItem("")
  }

  return (
    <div>
     <TextField id="filled-basic" label="Item" variant="filled" value={item} onChange={(e) => setItem(e.target.value)}/>
     <Button variant="contained" color="primary" onClick={() => handleAdd()}>Add</Button>
     <Button variant="contained" color="secondary" onClick={resetList}>Delete all</Button>
     <p>Number of elements: {numberOfItem}</p>
    </div>
  );
}

export default AddItem;
