function sortear(qtde){
  let numerosMega = new Set()
  while(numerosMega.size < qtde){
    numerosMega.add(parseInt(Math.random() * 60))
  }
  
  return [...numerosMega].sort((a, b) => a - b)
}

console.log(sortear(6).sort((a, b) => a-b))
console.log(sortear(6).sort((a, b) => a-b))
console.log(sortear(6).sort((a, b) => a-b))