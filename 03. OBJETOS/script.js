//  Crea un objeto llamado producto con las siguientes propiedades: nombre, descripcion, precio e ID.

const producto = {
  nombre: "Mouse Pad",
  descripcion: "Mousepad Xl Pc Gamer Havit Mouse Pad Ideal Para Mouse Gaming",
  precio: 2300,
  ID: Math.random()
}

//Accede a dos de las propiedades del objeto y muestra su valor en la consola.

console.log(producto.nombre)


// Utiliza la sintaxis de punto para agregar dos nuevas propiedades llamadas stock y imagen y asignarles un valor.

producto.stock = 457
producto.imagen = "img/loky1.jpg"
console.log(producto)

// Utiliza la sintaxis de corchetes para agregar otra propiedad llamada codigo y asignarle un valor.

producto['codigo'] = 3215647
console.log(producto)

// Utiliza la sintaxis de objeto para eliminar la propiedad stock del objeto producto.

delete producto['stock']

// Utiliza la sintaxis de objeto para cambiar el valor de la propiedad precio por otro valor.

producto['precio'] = 1300

// OPCIONAL: Utiliza la sintaxis de punto para agregar una nueva propiedad llamada colores, tendra como valor un array con los colores disponibles. Mostrar por consola los colores disponibles para ese producto.

const colores = ["Azul", "Amarillo", "Rojo", "Verde", "Negro"]

producto['colores'] = colores

console.log(producto.colores)