import "./ServiceCard.css"

function ServiceCard({
  titulo,
  descripcion,
  onMasInfo
}) {
  return (
    <article className="service-card">

      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <button
        onClick={onMasInfo}
      >
        Más información
      </button>

    </article>
  )
}

export default ServiceCard