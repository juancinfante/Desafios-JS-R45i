let password = prompt("Ingrese contraseña")

// Valido la contraseña con length y metodos REGEX  
// Debe tener al menos 8 caracteres de longitud. => password.toString().length >= 8
// Debe contener al menos una letra minúscula y una letra mayúscula. => [A-Z]/.test(password.toString() && /[a-z]/.test(password.toString()
// Debe contener al menos un número. => /[0-9]/.test(password.toString())

if(password.toString().length >= 8 &&  /[A-Z]/.test(password.toString()) && /[a-z]/.test(password.toString()) && /[0-9]/.test(password.toString())){
  alert("Contraseña Valida")
}else{
  alert("Contraseña Invalida")
}

