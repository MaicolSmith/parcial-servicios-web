//Escribe un código que tome un string y lo imprima sin espacios en blanco al principio
//y al final, además que capitalice ( cambiar a mayúscula ) su primera y última letra.

let firstName = "gustavo";

let resultado = firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1, -1) + firstName.trim().charAt(firstName.trim().length - 1).toUpperCase();

console.log(resultado);
