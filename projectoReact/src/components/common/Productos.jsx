import "./Productos.css";
export const Productos = (item) => {
  return (
    <div style={{ border: "2px solid black"}} key={item.id}>
    <img src={item.img} alt="" />
    <h4>{item.title}</h4>
    <h3>{item.description}</h3>
    <h3>{item.price}</h3>
  </div>
  );
};
