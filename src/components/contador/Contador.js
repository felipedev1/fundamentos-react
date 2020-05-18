import React, { Component } from 'react'
import Display from './Display'
import PassoForm from './PassoForm'
import Botoes from './Botoes'
import './Contador.css'

export default class Contador extends Component {

  state = {
      numero: this.props.numeroInicial,
      passo: this.props.passoInicial || 5
  }
  
  inc(){
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }

  dec(){
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }

  render() {
    return (
      <div className="Contador">
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={(novoPasso) => this.setState({passo: novoPasso})} />
        <Botoes onInc={() => this.inc()} onDec={() => this.dec()} />
      </div>
    )
  }
}
