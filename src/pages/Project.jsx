import {useParams} from "react-router-dom";
import projects from "../assets/datas/projects.json";
import Badge from "../components/Badge.jsx";


export default function Project(){
    // recuperation of the project id
    const {idWork}= useParams()
    // Recuperation of the project
    const projectSearch = projects.find((project) => project.id === idWork)
    const skills = projectSearch.skills
    const images = projectSearch.images
    return(
        <div className="project__section">
            <h2 className="project__title">{projectSearch.title}</h2>
            <div className="skills__list">
                {skills.map((skill, index) =>(
                    <Badge
                        key={index}
                        text={skill}
                    />
                ))}
            </div>
            <p className="project__description">{projectSearch.description}</p>
            {projectSearch.website  ? <a href={projectSearch.website} className="link__text">Visiter le site</a> : ""}
            <div className="project__image__container">
                {images.map((image, index) =>(
                    <img
                        key={index}
                        src={image.url}
                        alt={image.alt}
                        className="project__image"/>
                ))}
            </div>
        </div>
    )
}