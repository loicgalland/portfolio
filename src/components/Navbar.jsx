import { Link, NavLink } from "react-router-dom";
import {useState} from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState('false')
    const openMenu = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <nav className={`navbar ${!isOpen ? "active__navbar" : ""}`}>
            {/* -- Creation of the burger menu -- */}
            <div className={`navbar__burger ${!isOpen ? "active__burger" : ""}`}>
                <button className="navbar__button" onClick={openMenu}>
                    <i className={`fa-solid fa-xmark icon__close ${!isOpen ? "active__close" : "-"}`}></i>
                </button>
                <button className="navbar__button" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            <div className={`navbar__list ${!isOpen ? "active__list" : ""}`}>
                {/* -- Creation of the navbarl list-- */}
                <NavLink to="/" className={({ isActive})=> isActive ? "active" : ""} onClick={openMenu}>Home</NavLink>
                <NavLink to="/portfolio" onClick={openMenu}>Projets</NavLink>
                <Link to="/" className="navbar__link--strong" onClick={openMenu}>Loïc Galland</Link>
                <a href="/#about" onClick={openMenu}>À propos</a>
                <NavLink to="/contact" onClick={openMenu}>Contact</NavLink>
            </div>
        </nav>
    )
}