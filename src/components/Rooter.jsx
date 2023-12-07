import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Portfolio from "../pages/Portfolio.jsx";
import Project from "../pages/Project.jsx";
import Contact from "../pages/Contact.jsx";

export default function Rooter() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/project/:idWork" element={<Project />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    )
}