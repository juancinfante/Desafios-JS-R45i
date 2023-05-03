const personas = [
  { nombre: 'Juan', edad: 25, ciudad: 'Buenos Aires', sueldo: 50000 },
  { nombre: 'María', edad: 30, ciudad: 'Rosario', sueldo: 65000 },
  { nombre: 'Pedro', edad: 40, ciudad: 'Córdoba', sueldo: 80000 },
  { nombre: 'Lucía', edad: 35, ciudad: 'Mendoza', sueldo: 75000 }
  ];



// 1- Calcular el total de sueldos del siguiente array de personas:

// 2- A partir del mismo array de personas crear un nuevo array solo con los mayores de 30.

let totalSueldos = 0;
const mayoresP = []
for(i=0;i<personas.length;i++){

  // Sumando sueldos
  totalSueldos += personas[i].sueldo;

  // Mayores de 30
  if(personas[i].edad > 30){
    mayoresP.push(personas[i])     
  }
}

console.log("El total de sueldos es " + totalSueldos)
console.log(mayoresP)



// 3- Calcular la ganancia de vender 3 productos de cada uno del siguiente array de productos pero solo de los que tienen la propiedad de sold en true, teniendo en cuenta que la ganancia por venta es del 30%.

const productos = [
  { nombre: 'Camisa', precio: 150, stock: 20, vendidos: 5, sold: true },
  { nombre: 'Pantalón', precio: 250, stock: 15, vendidos: 8, sold: false },
  { nombre: 'Zapatillas', precio: 500, stock: 10, vendidos: 3, sold: true },
  { nombre: 'Bolso', precio: 300, stock: 25, vendidos: 12, sold: false },
  { nombre: 'Cinturón', precio: 100, stock: 30, vendidos: 10, sold: true },
  { nombre: 'Sombrero', precio: 200, stock: 5, vendidos: 1, sold: false },
  { nombre: 'Bufanda', precio: 50, stock: 50, vendidos: 20, sold: true },
  { nombre: 'Guantes', precio: 80, stock: 40, vendidos: 18, sold: false },
  { nombre: 'Gorra', precio: 120, stock: 8, vendidos: 2, sold: true },
  { nombre: 'Gafas de sol', precio: 180, stock: 12, vendidos: 6, sold: false },
  { nombre: 'Pulsera', precio: 20, stock: 60, vendidos: 30, sold: true },
  { nombre: 'Collar', precio: 40, stock: 45, vendidos: 25, sold: false },
  { nombre: 'Anillo', precio: 60, stock: 35, vendidos: 15, sold: true },
  { nombre: 'Pendientes', precio: 30, stock: 55, vendidos: 22, sold: false },
  { nombre: 'Reloj', precio: 400, stock: 6, vendidos: 4, sold: true }
  ];
let ganancia = 0, totalPorVenta = 0;
for(i=0;i<productos.length;i++){
  if(productos[i].sold){
    ganancia += (productos[i].precio * 30 / 100) * 3;
    console.log("La ganancia de vender 3 "+ productos[i].nombre + " es "+ ganancia)
  }
}
