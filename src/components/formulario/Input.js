import React, {useState} from 'react'
import './Input.css'

export default () => {
  const [valor, setValor] = useState('Inicial')

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <input value={valor} onChange={(e) => setValor(e.target.value)}/>
    </div>
  )
}
