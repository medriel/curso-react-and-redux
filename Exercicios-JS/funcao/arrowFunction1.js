let dobro = function (a) {
  return 2 * a
}

//reescrevendo a função de outra forma

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a //return implícito

console.log(dobro(Math.PI))

//outra função                


let ola = function () {
  return 'Olá'
}
//reescrevendo
ola = () => 'Olá'
ola = _ => 'Olá' //possui um parametro 
console.log(ola())