import { useState } from "react"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Servicios() {

  const [modalOpen, setModalOpen] = useState(false)

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null)

  const abrirModal = (servicio) => {
    setServicioSeleccionado(servicio)
    setModalOpen(true)
  }

  const servicios = [
    {
      emoji: "📚",
      titulo: "Corrección Editorial",
      descripcion:
        "Revisión integral de textos para garantizar claridad, coherencia y calidad profesional.",
      items: [
        "Corrección ortográfica",
        "Corrección gramatical",
        "Corrección de estilo",
        "Revisión de manuscritos",
        "Informes editoriales"
      ]
    },
    {
      emoji: "🎨",
      titulo: "Ilustración",
      descripcion:
        "Creación de ilustraciones personalizadas para proyectos editoriales y creativos.",
      items: [
        "Ilustraciones para libros",
        "Portadas",
        "Personajes",
        "Material educativo",
        "Proyectos personalizados"
      ]
    },
    {
      emoji: "💻",
      titulo: "Diseño Web",
      descripcion:
        "Desarrollo de sitios modernos, elegantes y adaptados a todos los dispositivos.",
      items: [
        "Sitios institucionales",
        "Landing pages",
        "Portfolio profesional",
        "Responsive",
        "SEO básico"
      ]
    }
  ]

  return (
    <>
      <Navbar />

      <section className="services-page">

        <div className="services-hero">

          <p>Nuestros servicios</p>

          <h1>
            Soluciones creativas para proyectos con identidad
          </h1>

          <span>
            Acompañamos a autores, editoriales y marcas
            en cada etapa de sus proyectos.
          </span>

        </div>

        <div className="services-list">

          {servicios.map((servicio, index) => (

            <div
              className="service-card"
              key={index}
            >

              <div className="service-icon">
                {servicio.emoji}
              </div>

              <h2>{servicio.titulo}</h2>

              <p>{servicio.descripcion}</p>

              <ul>

                {servicio.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}

              </ul>

              <button
                onClick={() => abrirModal(servicio)}
              >
                Solicitar información
              </button>

            </div>

          ))}

        </div>

      </section>

      {modalOpen && (

        <div
          className="modal-overlay"
          onClick={() => setModalOpen(false)}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>

            <h2>
              {servicioSeleccionado.titulo}
            </h2>

            <p>
              {servicioSeleccionado.descripcion}
            </p>

            <h3>Incluye:</h3>

            <ul className="modal-list">

              {servicioSeleccionado.items.map((item, index) => (
                <li key={index}>
                  {item}
                </li>
              ))}

            </ul>

            <Link
              to="/contacto"
              className="modal-budget-btn"
              onClick={() => setModalOpen(false)}
            >
              Solicitar presupuesto
            </Link>

          </div>

        </div>

      )}

      <Footer />
    </>
  )
}

export default Servicios