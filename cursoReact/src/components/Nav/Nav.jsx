import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
    //Dejamos los Link preparados para cuando hagamos filtrado por categoria
    //Por ahora, quedan de vista, pero sirven al tocar para escribir la ruta
    //en la barra de busqueda
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/salado"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/"}>Servicios</Link>
                </li>
                <li>
                    <Link to={"/"}>Nosotros</Link>
                </li>
                <li>
                    <Link to={"/"}>Donde estamos</Link>
                </li>
                <li>
                    <Link to={"/"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};
