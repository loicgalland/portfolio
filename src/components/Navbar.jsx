import { Link, NavLink } from "react-router-dom";
import {useState} from "react";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState('false')
    const [isBlue, setIsBlue] = useState('false')

    // Gestion on the contact navbar
    const changeToBlue = () =>{
        setIsBlue('true')
        console.log(isBlue)
    }
    const changeToWhite = () =>{
        setIsBlue('false')
        console.log("desactive")
    }

    // Gestion of the responsive menu
    const openMenu = () =>{
        setIsOpen(!isOpen)
    }
    return(
        <nav className={`navbar ${!isOpen ? "active__navbar" : ""} ${isBlue === 'true' ? "blue" : ""}`}>
            {/* -- Creation of the burger menu -- */}
            <div className={`navbar__burger ${!isOpen ? "active__burger" : ""} `}>
                <button className="navbar__button" onClick={openMenu}>
                    <i className={`fa-solid fa-xmark icon__close ${!isOpen ? "active__close" : "-"} ${isBlue === 'true' ? "blue" : ""}`}></i>
                </button>
                <button className="navbar__button" onClick={openMenu}>
                    <i className={`fa-solid fa-bars ${isBlue === 'true' ? "blue" : ""}`}></i>
                </button>
            </div>
            <div className={`navbar__list ${!isOpen ? "active__list" : ""}`}>
                {/* -- Creation of the navbarl list-- */}
                <NavLink to="/" className={({ isActive})=> isActive ? "active" : ""} onClick={() =>{openMenu(); changeToWhite()}}>Home</NavLink>
                <NavLink to="/portfolio" onClick={() =>{openMenu(); changeToWhite()}}>Projets</NavLink>
                <Link to="/" className="navbar__link--strong" onClick={() =>{openMenu(); changeToWhite()}}>Loïc Galland</Link>
                <a href="/#about" onClick={() =>{openMenu(); changeToWhite()}}>À propos</a>
                <NavLink to="/contact" onClick={() =>{openMenu(); changeToBlue()}}>Contact</NavLink>
            </div>
        </nav>
    )
}