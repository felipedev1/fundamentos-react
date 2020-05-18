import React from 'react'
import DiretaFilho from './DiretaFilho'


export default props => {
  return (
    <div>
      <DiretaFilho nome="Gabriel" idade={16} nerd={false} />
      <DiretaFilho nome="João" idade={18} nerd={true} />
    </div>
  )
}
