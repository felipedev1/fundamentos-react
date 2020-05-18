import React from 'react'
import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumAleatorio from './components/basicos/NumAleatorio'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'
import Card from './components/layout/Card'

export default function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="cards">
        <Card titulo="Contador" color="#003300">
          <Mega />
        </Card>

        <Card titulo="Contador" color="#AAA">
          <Contador numeroInicial={10} />
        </Card>

        <Card titulo="Componente Controlado" color="#6BE400">
          <Input />
        </Card>

        <Card titulo="Comunicação Indireta" color="#000">
          <IndiretaPai />
        </Card>

        <Card titulo="Comunicação Direta" color="#A64B00">
          <DiretaPai />
        </Card>

        <Card titulo="Renderização Condicional" color="#5CCCCC">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: "Fernando"}} />
          <UsuarioInfo usuario={{ email: "Fernando@gmail.com"}} />
        </Card>

        <Card titulo="Desafio Repetição Produtos" color="#7109AA">
          <TabelaProdutos />
        </Card>

        <Card titulo="Repetição - Alunos" color="#FF4C65">
          <ListaAlunos />
        </Card>

        <Card titulo="Componente com filhos" color="#FFFF00">
          <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"  />
          <FamiliaMembro nome="Ana"  />
          <FamiliaMembro nome="Bia" />
          </Familia>
        </Card>

        <Card titulo="Desafio Número Aleatório" color="#080">
          <NumAleatorio min={100} max={200} />
        </Card>

        <Card titulo="Fragmento" color="#FF2C00">
          <Fragmento />
        </Card>

        <Card titulo="Com Parametro" color="#9303A7">
          <ComParametro 
            titulo="Situação do Aluno"
            aluno="Felipe"
            nota={10} />
        </Card>

        <Card titulo="Primeiro Componente" color="#0966A3">
          <Primeiro />
        </Card>
      </div>
    </div>
  )
}
