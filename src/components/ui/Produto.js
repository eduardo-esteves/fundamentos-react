import React from 'react'

import Button from './Button'
import Load from './Load'
import Titulo from './TItulo'

const Produto = () => {

  const linkApi = "https://ranekapi.origamid.dev/json/api/produto/"

  const [produto, setProduto] = React.useState(null)
  const [pref, setPref]       = React.useState(null)
  const [load, setLoad]       = React.useState(true)

  React.useEffect( () => {
    // Retrieve
    const produto = localStorage.getItem('produto')
    produto && handleClick(produto)

  }, [])

  async function handleClick(e) {
    setLoad(true)

    const textProduto = (typeof e === 'string') ? e : e.target.innerText

    // Store
    localStorage.setItem('produto', textProduto);

    const req  = await fetch(linkApi + textProduto)
    const json = await req.json()

    setProduto(json)
    setPref(textProduto)

    setLoad(false)
  }

  return (
    <div>
      <Titulo titulo="Preferência: " aligin="center">
        {pref}
      </Titulo>
      <Button label="notebook" handleClick={handleClick} />
      <Button label="smartphone" handleClick={handleClick} />

      {produto &&
      <>
        <Load load={load} />
        <Titulo titulo={produto.nome} />
        <p>Preço: {produto.preco}</p>
        <img src={produto.fotos[0].src} alt={produto.nome} width="80%"/>
      </>
      }
    </div>
  )
}


export default Produto
