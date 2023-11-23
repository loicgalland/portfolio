import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Rooter from "./components/Rooter.jsx";
import Footer from "./components/Footer.jsx"
import './assets/sass/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Navbar />
          <Rooter />
          <Footer />
      </BrowserRouter>
  </React.StrictMode>,
)
