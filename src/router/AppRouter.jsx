import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Servicios from "../pages/Servicios"
import Galeria from "../pages/Galeria"
import Contacto from "../pages/Contacto"
import SobreMi from "../pages/SobreMi"

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter