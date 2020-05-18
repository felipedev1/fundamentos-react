import React from 'react'

export default ({numero}) => {
  const isPar = numero % 2 === 0 ? true : false

  return (
    <div>
      {isPar ?
        <span>Par</span> :
        <span>Impar</span>
      }
    </div>
  )
}
