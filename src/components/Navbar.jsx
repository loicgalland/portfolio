import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
            <NavLink to="/" className={({ isActive})=> isActive ? "active" : ""}>Home</NavLink>
            <NavLink to="/portfolio">Projets</NavLink>
            <Link to="/" className="navbar__link--strong">Loïc Galland</Link>
            <a href="/#about">À propos</a>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}