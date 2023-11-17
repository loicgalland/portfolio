import Cta from "../components/Cta.jsx";
import {Link} from "react-router-dom";



function Home() {


  return (
    <div className="home__container">
        <h1 className="home__title">Hello !<br/>
          Je m’appelle <span className="home__title--blue">Loïc Galland</span><br/>
          Je suis ravis de vous savoir ici !
        </h1>
        <h2 className="home__subtitle">
          Anciennement graphiste, je me suis reconverti en développeur frontend.<br/>
          Avec ces deux casquettes, je vous propose de créer un design unique et personnalisé pour votre site internet.
        </h2>
        <div className="home__cta__container">
            <Link to="/contact">
                <Cta
                    text="Contactez-moi"
                    classname=""
                />
            </Link>
            <Link to="/portfolio">
                <Cta
                    text="Voir mes projets"
                    classname="btn-outlined"
                />
            </Link>
        </div>
        <i className="fa-solid fa-arrow-down arrow-down"></i>
    </div>
  )
}

export default Home
