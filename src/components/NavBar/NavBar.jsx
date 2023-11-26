import CardWidget from "../CartWidget/CardWidget"
import './NavBar.css'
const NavBar = () => {
    return (
        <header>
            <h1>Marolio Online</h1>
            <nav>
                <ul>
                    <li>Lacteos</li>
                    <li>Bebidas</li>
                    <li>Almacen</li>
                </ul>
            </nav>
            <CardWidget/>
        </header>
    )
}

export default NavBar