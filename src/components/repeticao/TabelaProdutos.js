import React from 'react'
import produtos from '../../data/produtos'
import './TabelaProdutos.css'

export default () => {
  const produtosTR = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : ''}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>
    )
  })
  return (
    <div className="tabela-produtos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtosTR}
        </tbody>
      </table>
    </div>
  )
}
