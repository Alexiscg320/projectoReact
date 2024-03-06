import {Productos} from "../common/Productos"
export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <Productos
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        );
      })}
      ;
    </div>
  );
};

export default ItemList;
