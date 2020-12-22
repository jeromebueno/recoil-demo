import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { removeItem } from "../../api/shopping-list";
import { shoppingListState } from "../../state/atoms/shoppingListState";
import { currentShoppingListState } from "../../state/selectors/currentShoppingListState";

function ItemList() {
  const currentShoppingList = useRecoilValue(currentShoppingListState);
  const [shoppingList, setShoppingList] = useRecoilState(shoppingListState);

  useEffect(() => {
    setShoppingList(currentShoppingList);
  }, [currentShoppingList, setShoppingList]);

  const handleDeleteItem = async (itemId) => {
    await removeItem(itemId);
    setShoppingList(shoppingList.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Order</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shoppingList.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteItem(row.id)}
                  >
                    Delete
                  </Button>
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
