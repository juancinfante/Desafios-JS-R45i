const personajes =["Iron Man","Spider Man", "Thor" ,"Hulk" ,"Doctor Strange","Black Widow","Batman", "Joker","Capitan America", "Ant Man"]
const numeros = [11,12,13,14,15,16,17,18,19,11]


// MOSTRANDO EN CONSOLA

console.log(personajes)
console.log(numeros)

// AGREGANO ELEMENTOS AL FINAL DE CADA ARRAY

personajes.push("Capitana Marvel")
personajes.push("Misterio")

numeros.push(2)
numeros.push(3)

console.log(personajes)
console.log(numeros)

// Cambiar el valor de los elementos que se encuentran en la segunda y quinta posición por otros distintos pero que sean del mismo tipo de dato.

personajes[1] = "Juan"
personajes[4] = "Cruz"

// Utilizando el array de numeros. Mostrar por consola la suma entre los elementos en la segunda, tercer y sexta posición.

let suma = numeros[1] + numeros[2] + numeros[5]
console.log(suma)

console.log(suma * numeros[9])

