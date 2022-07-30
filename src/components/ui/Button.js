import React from 'react'


const Button = ({ label, handleClick }) => {
  return <button
    style={{marginRight: "0.5rem"}}
    onClick={(e) => handleClick && handleClick(e)}>
    {label}
  </button>
}


export default Button
