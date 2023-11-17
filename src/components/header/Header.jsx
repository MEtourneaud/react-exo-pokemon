import { Link } from "react-router-dom"
import "./Header.scss"

function Header() {
    return(
        <header>
            <nav>
                <ul className="list">
                    <li><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"></img></li>
                    <li><Link to="/" className="menu">Home</Link></li>
                    <li><Link to="/pokemons" className="menu">Pokemons</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header