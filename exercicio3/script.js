// Exercicio 3: Manipulação de Arrays
let numeros = [4, 7, 33];
let nomes = ['roberto', 'carla', 'emily'];
let variados = [27, 'vitoria', true]


let numerosCopia = numeros.slice()
let nomesCopia = nomes.slice()
let variadosCopia = variados.slice()

// Adicione um item number ao primeiro array
numerosCopia.push(21)
console.log('Números original', numeros)
console.log('Números cópia', numerosCopia)

// Remova o último item do segundo array
nomesCopia.pop()
console.log('Nomes original', nomes)
console.log('Nomes cópia', nomesCopia)

// Remova o segundo item do terceiro array
variadosCopia.splice(1,1)
console.log('Variados original', variados)
console.log('Variados cópia', variadosCopia)



