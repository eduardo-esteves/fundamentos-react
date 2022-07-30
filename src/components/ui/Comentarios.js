import React from 'react'


const Comentarios = () => {
  const [ comentarios, setComentarios ] = React.useState([])
  const [ comentario, setComentario ] = React.useState('')
  const refComent = React.useRef()

  const handleComentario = ( ) => {
    setComentarios([...comentarios, comentario])
    setComentario('')
    console.log(refComent.current.name)
    refComent.current.focus()
  }

  return (
    <div>

      <ul>
        {
          comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))
        }
      </ul>

      <input
        name="comentario"
        type="text"
        ref={refComent}
        value={comentario} onChange={({ target }) => setComentario(target.value)} />

      <div>
        <button onClick={handleComentario} style={{marginTop: "1rem"}}>Comentar</button>
      </div>

    </div>
  )

}

export default Comentarios
