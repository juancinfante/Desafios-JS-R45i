const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

array.push(33)
array.pop()
array.unshift(22)
array.shift()

let newArray = array.slice(1,4)

console.log(newArray)

array.splice(1,0,99,100)
console.log(array)

let unidos = newArray.concat(array)

console.log(unidos)

array.sort()

array.reverse()
array.join("*")

console.log(array)

const fruits = ["Pera", "Manzana", "Banana"]

console.log(fruits.indexOf("Manzana"))
console.log(fruits.includes("Pera"))