import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import Navbar from "../components/Navbar"
import ServiceCard from "../components/ServiceCard"
import Footer from "../components/Footer"

function Home() {

  const [modalOpen, setModalOpen] = useState(false)

  const [servicioSeleccionado, setServicioSeleccionado] = useState(null)

  const abrirModal = (servicio) => {
    setServicioSeleccionado(servicio)
    setModalOpen(true)
  }

  return (
    <>
      <Navbar />

      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="subtitle">
            Diseño Web • Corrección Editorial • Branding
          </p>

          <h1>
            Elegancia visual para proyectos creativos
          </h1>

          <p className="description">
            Creamos experiencias digitales sofisticadas
            para autores, editoriales y marcas con identidad.
          </p>

          <Link
            to="/servicios"
            className="hero-button"
          >
            Explorar servicios
          </Link>

        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >

          <img
            src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop"
            alt="workspace"
          />

        </motion.div>

      </section>

      <motion.section
        className="services-section"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <div className="section-title">

          <p>Nuestros servicios</p>

          <h2>
            Soluciones creativas y editoriales
          </h2>

        </div>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >

          <ServiceCard
            titulo="Diseño Web"
            descripcion="Sitios modernos, elegantes y responsive para marcas y autores."
            onMasInfo={() =>
              abrirModal({
                titulo: "Diseño Web",
                contenido:
                  "Desarrollo de sitios web modernos y responsive. Incluye portfolios, landing pages, sitios institucionales, optimización SEO básica y diseño centrado en la experiencia del usuario."
              })
            }
          />

          <ServiceCard
            titulo="Corrección Editorial"
            descripcion="Revisión ortográfica, gramatical y de estilo para publicaciones."
            onMasInfo={() =>
              abrirModal({
                titulo: "Corrección Editorial",
                contenido:
                  "Corrección ortográfica, gramatical y de estilo para libros, artículos y publicaciones digitales. Se trabaja la claridad, coherencia y calidad profesional del texto."
              })
            }
          />

          <ServiceCard
            titulo="Ilustración"
            descripcion="Creación de universos visuales para libros y proyectos creativos."
            onMasInfo={() =>
              abrirModal({
                titulo: "Ilustración",
                contenido:
                  "Ilustraciones para libros infantiles, material educativo, portadas y proyectos personalizados. Cada trabajo se desarrolla de forma única según la identidad del proyecto."
              })
            }
          />

        </motion.div>

      </motion.section>

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
              {servicioSeleccionado.contenido}
            </p>

          </div>

        </div>

      )}

      <Footer />

    </>
  )
}

export default Home