import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import sandraFoto from "../assets/sandrita.png"

function SobreMi() {
  return (
    <>
      <Navbar />

      <section className="about-page">

        <div className="about-image">
          <img
            src={sandraFoto}
            alt="Sandra Garbellano"
            />
        </div>

        <div className="about-content">

          <p className="about-subtitle">
            Sobre mí
          </p>

          <h1>
            Sandra Garbellano
          </h1>

          <p>
            Me dedico a la corrección editorial y a la creación de proyectos
            visuales que combinan sensibilidad artística, comunicación clara
            y atención al detalle.
          </p>

          <p>
            A lo largo de mi trayectoria he trabajado en la revisión de textos,
            libros e ilustraciones, ayudando a autores y editoriales a dar forma
            a sus ideas de manera profesional.
          </p>

          <p>
            Mi objetivo es transformar cada proyecto en una experiencia cuidada,
            elegante y coherente con la identidad de quien la crea.
          </p>

        </div>

      </section>

      <Footer />
    </>
  )
}

export default SobreMi