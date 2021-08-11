//operador ...rest(juntar)/spread(espalhar)
//usar rest com parametro de funcao

// usar spread com objeto
const fucionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...fucionario }
console.log(clone)

//usar spread com array
const grupoA = [`Joao`, `Pedro`, `Gloria`]
const grupoFinal = [`Maria`, `Rafael`, ...grupoA]
console.log(grupoFinal)