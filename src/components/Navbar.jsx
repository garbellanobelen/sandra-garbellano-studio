import { Link } from "react-router-dom"

import { useState } from "react"

import { FaBars, FaTimes } from "react-icons/fa"

import "./Navbar.css"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <header className="navbar">

      <h2 className="logo">
        Sandra Garbellano
      </h2>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? <FaTimes /> : <FaBars />}

      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>

        <ul className="nav-links">

          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/sobre-mi">Sobre mí</Link>
          </li>

          <li>
            <Link to="/servicios">Servicios</Link>
          </li>

          <li>
            <Link to="/galeria">Galería</Link>
          </li>

          <li>
            <Link to="/contacto">Contacto</Link>
          </li>

        </ul>

      </nav>

    </header>
  )
}

export default Navbar