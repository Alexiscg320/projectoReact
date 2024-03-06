import {ItemList} from "./ItemList";
import { products } from "../../productMock";
import { useState, useEffect } from "react";
export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(products);
      //reject("error")
    });
    tarea
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(items);
  return(
  <>
  {
    items.length > 0 ? <ItemList items={items}/> : <h1> No hay</h1>
  }
  
  </>
  )
};
export default ItemListContainer;
