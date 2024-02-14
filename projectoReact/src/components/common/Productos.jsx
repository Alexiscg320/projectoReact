export const Productos = ( prop ) => {
    const { titulo, desc, precio} = prop
    return (
    <div>
        <h3>{prop.titulo}</h3>
        <h4>{prop.desc}</h4>
        <h4>{prop.precio}</h4>
    </div>
  )
}
