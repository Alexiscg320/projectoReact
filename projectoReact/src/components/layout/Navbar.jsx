import { CardWidget } from "../common/CardWidget"
import './Navbar.css'

export const Navbar = ()=>{
    
    return <div className="navbar">
                <div className="logo">
                    <img src="https://res.cloudinary.com/davc5nbso/image/upload/v1707903088/lindo-televisor-antiguo-estilo-dibujos-animados-ilustracion-garabato-dibujado-mano_288411-944_mrfmqb.jpg" />
                </div>
            <div className="categories">
                <a href="#">LED</a>
                <a href="#">OLED</a>
                <a href="#">8K</a>
                <a href="#">SMART</a>
            </div>
                <div className="icon">
                    <span>5</span> 
                    <CardWidget /> 
                </div>
            </div> 

}