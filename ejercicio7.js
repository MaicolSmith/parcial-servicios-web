//Escribe un código que tome dos números y determine cuál es el mayor, luego
//imprime el resultado en la consola.
// Pide al usuario que ingrese dos números
const num1 = Number(process.argv("Ingresa el primer número: "));
const num2 = Number(process.argv("Ingresa el segundo número: "));

if (num1 > num2) {
  console.log(`El número mayor es: ${num1}`);
} else if (num2 > num1) {
  console.log(`El número mayor es: ${num2}`);
} else {
  console.log("Los números son iguales.");
}
