import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Portfolio from "../pages/portfolio.jsx";
import Project from "../pages/projet.jsx";
import Contact from "../pages/Contact.jsx";

export default function Rooter() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/project/:id" element={<Project />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    )
}