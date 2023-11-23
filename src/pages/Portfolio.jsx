import Projects from "../assets/datas/projects.json"
import {Link} from "react-router-dom";


export default function Portfolio(){
    return(
        <div className="portfolio__container">
            <h2>PortFolio</h2>
            <ul className="projects__list">
                {Projects.map((project) =>(
                    <li key={project.id} className="project__title"><Link to={`/project/${project.id}`}>{project.title}</Link></li>
                ))}
            </ul>

        </div>
    )
}