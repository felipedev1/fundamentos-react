import React, {useState} from 'react'
import './Mega.css'

export default function Mega(props) {

  const [qtde, setqtde] = useState(props.qtde || 6)
  const numerosIniciais = gerarNumeros(qtde)
  const [numeros, setNumeros] = useState(numerosIniciais)
  

  function gerarNumeros(qtde){
    if(qtde < 6) qtde = 6
    if(qtde > 15) qtde = 15
    let numerosMega = new Set()
    while(numerosMega.size < qtde){
      numerosMega.add(parseInt(Math.random() * 60))
    }
    
    return [...numerosMega].sort((a, b) => a - b)
  }

  function mostrarNumeros() {
    return numeros.map(numero => {
      return (
        <span className="bolaNumero">{numero < 10 ? `0${numero}` : numero}</span>
      )
    })
  }

  return (
    <div className="Mega">
      <h2>Mega Sena</h2>
      <div className="numeros">
        {mostrarNumeros()}
      </div>
      <div>
        <label>Qtde de Números (min:6, max:15):  </label>
        <input type="number"
          min="6"
          max="15"
          value={qtde} 
          onChange={e => setqtde(e.target.value)} />
      </div>
      <button onClick={() => setNumeros(gerarNumeros(qtde))} >
        Gerar Números
      </button>

    </div>
  )
}
