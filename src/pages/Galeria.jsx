import { useState } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import Lightbox from "yet-another-react-lightbox"

import "yet-another-react-lightbox/styles.css"
import libro1 from "../assets/galeria/libro1.jpg"
import libro2 from "../assets/galeria/libro2.jpg"
import libro3 from "../assets/galeria/libro3.jpg"
import libro4 from "../assets/galeria/libro4.jpg"
import libro5 from "../assets/galeria/libro5.jpg"
import libro6 from "../assets/galeria/libro6.jpg"
import libro7 from "../assets/galeria/libro7.jpg"
import libro8 from "../assets/galeria/libro8.jpg"
import libro9 from "../assets/galeria/libro9.jpg"
import libro10 from "../assets/galeria/libro10.jpg"
import libro11 from "../assets/galeria/libro11.jpg"
import libro12 from "../assets/galeria/libro12.jpg"
import libro13 from "../assets/galeria/libro13.jpg"
import libro14 from "../assets/galeria/libro14.jpg"


function Galeria() {

  const imagenes = [
  { src: libro1, 
    titulo: "Entre el cielo y la tierra"
   },
  { src: libro2,
    titulo: "Nuestro mundo en motocicleta"
   },
  { src: libro3,
    titulo: "500 preguntas para transformar tu vida"
   },
  { src: libro4,
    titulo: "No hay flores sin lluvia"
   },
  { src: libro5,
    titulo: "Palabras sublimadas"
   },
  { src: libro6,
    titulo: "Poesías confidentes"
   },
  { src: libro7,
    titulo: "Primavera de poemas"
   },
  { src: libro8,
    titulo: "Puente al infinito"
   },
  { src: libro9, 
    titulo: "Desafío al pasado"
   },
  { src: libro10,
    titulo: "Entre lo fantástico y lo real"
   },
  { src: libro11, 
    titulo: "Bajo la luna de abril"
   },
  { src: libro12, 
    titulo: "Sensamientos"
   },
  { src: libro13,
    titulo: "Poemas de una mente enferma y Carta a un desconocido"
   },
  { src: libro14,
    titulo: "Motorcycling our world"
   }
]

  const [open, setOpen] = useState(false)

  const [index, setIndex] = useState(0)

  return (
    <>
      <Navbar />

      <section className="gallery-page">

        <div className="gallery-title">

          <p>Portfolio visual</p>

          <h1>
            Ilustraciones & proyectos editoriales
          </h1>

        </div>

        <div className="gallery-grid">

          {imagenes.map((img, i) => (

            <div
              className="gallery-card"
              key={i}
              onClick={() => {
              setOpen(true)
              setIndex(i)
               }}
            >

  <img
    src={img.src}
    alt={img.titulo}
  />

  <div className="gallery-info">

    <h3>{img.titulo}</h3>

    <span>{img.categoria}</span>

  </div>

</div>

          ))}

        </div>

      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={imagenes}
        index={index}
      />

      <Footer />
    </>
  )
}

export default Galeria