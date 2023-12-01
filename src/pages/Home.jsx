import Cta from "../components/Cta.jsx";
import {Link} from "react-router-dom";
import Portrait from '../assets/images/portrait.webp'
import BackgroundImage from '../assets/images/background-image.png'
import Skills from '../assets/datas/skills.json'
import {useEffect} from "react";

function Home() {
    // aniamtion gestion with delay
    useEffect(() => {
        const arrowElement = document.querySelector('.arrow-down');

        const shakeWithDelay = () => {
            arrowElement.classList.add('animate-shake');
            setTimeout(() => {
                arrowElement.classList.remove('animate-shake');
                setTimeout(shakeWithDelay, 2000); // Delay between each repetition
            }, 500); // Animation duration
        };

        shakeWithDelay();
    }, []);
    // Background style
    const sectionStyle = {
        backgroundImage : `url(${BackgroundImage})`,
        backgroundSize: 'cover',
    }

  return (
    <div className="home__container">
        <section className="section__homepage">
            <h1 className="home__title">Hello !<br/>
                Je m’appelle <span className="home__title--blue">Loïc Galland</span><br/>
                Je suis ravi de vous savoir ici !
            </h1>
            <span className="home__subtitle">
                Graphiste et développeur frontend.
                Avec ces deux casquettes, je vous propose de créer un design unique et personnalisé pour votre site internet.
            </span>
            <div className="home__cta__container">
                <Link to="/contact">
                    <Cta
                        text="Contactez-moi"
                        classname="btn-animation"
                    />
                </Link>
                <Link to="/portfolio">
                    <Cta
                        text="Voir mes projets"
                        classname="btn-outlined btn-animation"
                    />
                </Link>
            </div>
            <i className="fa-solid fa-arrow-down arrow-down"></i>
        </section>
        <section className="section__about" style={sectionStyle} id="about">
            <img src={Portrait} alt="portrait-Loic-Galland" className="about__image"/>
            <h2 className="about__title">À propos</h2>
            <p className="about__description">
                Des bases solides en graphisme, combinées à une connaissance approfondie des technologies du développeur frontend
                me permettent de vous proposer une solution personnalisée et précise pour votre site web.
                Si vous souhaitez en savoir plus au sujet de mon parcours, je vous invite à consulter mon <a target="_blank" href="../assets/images/CV_LoïcGalland.pdf" className="link__text">curriculum vitae</a>

            </p>
            <p>
                Vous avez un projet et vous voulez en parler c’est par <Link to="/contact" className="link__text">ici</Link>
            </p>
            <h2 className="about__skills__title">Compétences</h2>
            <div className="about__skills--logos">
                {/* -- Call the map function on all the skill in JSON file -- */}
                {Skills.map((skill, index) => (
                    <div
                        className="skill__item"
                        key={index}
                    >
                        <img src={skill.url} alt={skill.title} className="logo__skill"/>
                        <span className="skill__title">{skill.title}</span>
                    </div>
                ))}
            </div>

        </section>
    </div>
  )
}

export default Home
