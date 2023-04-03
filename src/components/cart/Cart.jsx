import * as React from "react"; // импортируем библиотеку React
import Table from "@mui/material/Table"; // импортируем компонент Table из библиотеки Material-UI
import TableBody from "@mui/material/TableBody"; // импортируем компонент TableBody из библиотеки Material-UI
import TableCell from "@mui/material/TableCell"; // импортируем компонент TableCell из библиотеки Material-UI
import TableContainer from "@mui/material/TableContainer"; // импортируем компонент TableContainer из библиотеки Material-UI
import TableHead from "@mui/material/TableHead"; // импортируем компонент TableHead из библиотеки Material-UI
import TableRow from "@mui/material/TableRow"; // импортируем компонент TableRow из библиотеки Material-UI
import Paper from "@mui/material/Paper"; // импортируем компонент Paper из библиотеки Material-UI
import { useCart } from "../../context/CartContextProvider"; // импортируем хук useCart из нашего CartContextProvider
import { Button } from "@mui/material"; // импортируем компонент Button из библиотеки Material-UI

// функция, которая возвращает объект с полями name, calories, fat, carbs, protein
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// создаем массив rows, который содержит объекты, созданные функцией createData
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

// экспортируем компонент Cart, который использует хук useCart
export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();

  // вызываем функцию getCart при первом рендеринге компонента
  React.useEffect(() => {
    getCart();
  }, []);

  // функция для очистки корзины
  const cartCleaner = () => {
    localStorage.removeItem("cart"); // удаляем данные корзины из локального хранилища браузера
    getCart(); // вызываем функцию getCart для обновления состояния корзины
  };

  // возвращаем компонент TableContainer с дочерним компонентом Table, который содержит заголовок таблицы и тело таблицы
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">SubPrice</TableCell>
            <TableCell align="right">-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.picture} width="100" height="100" alt="" />
              </TableCell>
              <TableCell align="right">{row.item.name}</TableCell>
              <TableCell align="right">{row.item.type}</TableCell>
              <TableCell align="right">{row.item.description}</TableCell>
              <TableCell align="right">{row.item.price}</TableCell>
              <TableCell align="right">
                {
                  / Используем элемент input для изменения количества товара в корзине /
                }
                <input
                  type="number"
                  min={1}
                  max={100}
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  value={row.count}
                />
              </TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell align="right">
                {/ Кнопка для удаления товара из корзины /}
                <Button onClick={() => deleteCartProduct(row.item.id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button onClick={cartCleaner}>BUY NOW FOR {cart?.totalPrice} $</Button>
    </TableContainer>
  );
}
