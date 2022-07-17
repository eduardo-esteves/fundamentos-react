import React from "react";


const Contador = () => {

  const [ contador, setContador ] = React.useState(0)

  const handleIncrementContador = () => setContador(contador + 1)

  const handleDecrementContador = () => setContador(contador - 1)


  return (
    <>
      <button onClick={handleDecrementContador}> - </button>
      <span> {contador} </span>
      <button onClick={handleIncrementContador}> + </button>
    </>

  )

}

export default Contador
