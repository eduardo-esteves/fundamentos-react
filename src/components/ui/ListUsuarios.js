import React from 'react'
import UserContext from '../../contexts/UserContext'


const ListUsuarios = () => {

  const pessoas = React.useContext(UserContext)

  return (
    <>
      <h2>Lista de Usuários</h2>
      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Salario</th>
          </tr>
          {pessoas.map((pessoa, index) => (
            <tr key={index}>
              <td>{pessoa.nome}</td>
              <td>{pessoa.email}</td>
              <td>{pessoa.idade}</td>
              <td>{pessoa.salario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListUsuarios
