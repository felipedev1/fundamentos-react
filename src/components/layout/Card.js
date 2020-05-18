import React from 'react'
import './Card.css'

export default (props) => {
  const estilo = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
  }

  return (
    <div className="Card" style={estilo}>
      <div className="title"> {props.titulo} </div>
      <div className="content">
         {props.children} 
         </div>
    </div>
  )
}
