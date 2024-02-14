import { Productos } from "../common/Productos"

export const ItemListContainer =( prop )=>{
    return <div>
        <h2>{prop.greeting}</h2>
        <h2>tarjetas de productos</h2>
        <Productos titulo ={"Televisor Philip"} desc ={"plasma 4k 40 pulgadas"} precio={"900.000"}/>
        <Productos titulo ={"Televisor samsung"} desc ={"plasma 8k 52 pulgadas"} precio={"1.500.000"}/>
        <Productos titulo ={"Televisor Pedro"} desc ={"SyncMaster 18 pulgadas"} precio={"200.000"}/>
    </div>
}
export default ItemListContainer