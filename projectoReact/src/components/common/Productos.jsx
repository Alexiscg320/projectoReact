import "./Productos.css";
export const Productos = (prop) => {
  const { titulo, desc, precio } = prop;
  return (
  <div className="card-container"> 
    <div className="card">
      <img className="card-image" src="" alt=""></img>
      <div className="card-content">
        <h3>{prop.titulo}</h3>
        <h4>{prop.desc}</h4>
        <h4>{prop.precio}</h4>
      </div>
    </div>
    </div> 
  );
};
