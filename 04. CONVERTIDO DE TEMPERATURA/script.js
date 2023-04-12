// Escribe un programa que solicite al usuario ingresar una temperatura en grados Fahrenheit y luego convierta esa temperatura a grados Celsius.

let fahrenheit = prompt("Ingrese grados fahrenheit:")

// FORMULA 
let celcius = (fahrenheit - 32) / 1.8;

// El programa debe mostrar la temperatura convertida en grados Celsius redondeado hacia abajo si es .50 o menos y hacia arriba si es mayor a .50.

let cel = Math.round((celcius *100) /100)

alert(`La temperatura Fahrenheit F° ${fahrenheit} en grados celcius es igual a C° ${cel}`)
