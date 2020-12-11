import {TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core'
import { useRecoilValue } from 'recoil';
import { shoppingListState } from '../atoms/shoppingListState';

function ItemList() {
    const shoppingList = useRecoilValue(shoppingListState)

    return (
      <div>
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shoppingList.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">{i + 1}</TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    );
  }
  
  export default ItemList;
  