import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import emailjs from "@emailjs/browser"

import { useRef } from "react"

function Contacto() {

  const form = useRef()

  const sendEmail = (e) => {

    e.preventDefault()

    emailjs.sendForm(
      "service_22422x6",
      "template_0rzkmqb",
      form.current,
      "5nLxkCVXM6h856hG8"
    )

    .then(() => {
      alert("Mensaje enviado correctamente")
      form.current.reset()
    })

    .catch((error) => {

  console.log(error)

  alert("Error al enviar")

})

  }

  return (
    <>
      <Navbar />

      <section className="contact-page">

        <div className="contact-info">

          <p>Contacto</p>

          <h1>
            Hablemos sobre tu próximo proyecto
          </h1>

          <span>
            Diseño web, ilustración y corrección editorial
            para marcas y autores creativos.
          </span>

        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <input
            type="text"
            name="user_name"
            placeholder="Nombre"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
          />

          <input
            type="text"
            name="service"
            placeholder="Servicio de interés"
          />

          <textarea
            name="message"
            placeholder="Contanos sobre tu proyecto"
          ></textarea>

          <button type="submit">
            Enviar consulta
          </button>

        </form>

      </section>

      <Footer />
    </>
  )
}

export default Contacto