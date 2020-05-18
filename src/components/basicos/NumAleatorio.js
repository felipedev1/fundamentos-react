import React from 'react'

export default ({min, max}) => {
  const num = Math.floor(Math.random() * (max - min) + min)
  return (
    <>
      <h2>Valor Aleatório</h2>
      <p>Min: {min} </p>
      <p>Max: {max}  </p>
      <p>Resultado: {num}</p>
    </>
  )
}
