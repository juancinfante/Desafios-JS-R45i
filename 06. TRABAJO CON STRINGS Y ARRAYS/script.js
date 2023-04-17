let frase1 = prompt("Ingrese primera frase: ")
let frase2 = prompt("Ingrese segunda frase: ")
let frase3 = prompt('Ingrese tercera frase: ')

const fraseCorta = [];
const fraseLarga = [];
const fraseCompuesta = [];

// Uso el metodo split para convertir una frase en un arreglo de substrings
// luego compruebo su longitud, si da mayor a 1 es decir que es una frase compuesta
// si no es asi hago comprobaciones para ver si es una frase larga o corta

if(frase1.split(" ").length > 1){
  fraseCompuesta.push(frase1)
}else if(frase1.length > 20){
  fraseLarga.push(frase1)
}else{
  fraseCorta.push(frase1)  
}

if(frase2.split(" ").length > 1){
  fraseCompuesta.push(frase2)
}else if(frase2.length > 20){
  fraseLarga.push(frase2)
}else{
  fraseCorta.push(frase2)  
}

if(frase3.split(" ").length > 1){
  fraseCompuesta.push(frase3)
}else if(frase3.length > 20){
  fraseLarga.push(frase3)
}else{
  fraseCorta.push(frase3)  
}

console.log(fraseCorta)
console.log(fraseLarga)
console.log(fraseCompuesta)