import Cta from "../components/Cta.jsx";
import {Link} from "react-router-dom";
import Portrait from '../assets/images/portrait.webp'
import BackgroundImage from '../assets/images/background-image.png'
import Skills from '../assets/datas/skills.json'
import {useEffect} from "react";
import Cv from '../assets/CV_Loic_Galland.pdf'

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
            <div>
                <h2 className="about__title">À propos</h2>
                <p className="about__description">
                    Des bases solides en graphisme, combinées à une connaissance approfondie des technologies du développeur frontend
                    me permettent de vous proposer une solution personnalisée et précise pour votre site web.
                    Si vous souhaitez en savoir plus au sujet de mon parcours, je vous invite à consulter mon <a target="_blank" href={Cv} className="link__text">curriculum vitae</a>

                </p>
                <p>
                    Vous avez un projet et vous voulez en parler c’est par <Link to="/contact" className="link__text">ici</Link>
                </p>
            </div>

            <div className="container__experiences">
                <h2>Mon parcours</h2>
                <div className="experience__items">
                    <span>09/2023-12/2023 - <span className="strong">Formation Développeur web</span> (Openclassroom) </span>
                    <span>2019-2023 - <span className="strong">Infographiste</span> (Manhattan, Marcigny, 71)</span>
                    <span>09/2018-03/2019 <span className="strong">Échange Universitaire </span>(Suzhou Art and Design School, Chine)</span>
                    <span>2016-2018 - <span className="strong">DSAA mention Graphisme</span> (ESAAB, Nevers, 58)</span>
                    <span>2014-2016 - <span className="strong">BTS Design Graphique </span>(ESAAB, Nevers, 58)</span>
                </div>
            </div>
            <h2 className="about__skills__title">Mes compétences</h2>
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
