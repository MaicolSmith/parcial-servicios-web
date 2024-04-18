//Escribe un código que simula un juego donde el usuario debe adivinar un número
//secreto entre 1 y 100. El programa debe generar un número aleatorio y pedir al
//usuario que ingrese un número repetidamente hasta que adivine correctamente. El
//ciclo while se utiliza para controlar la repetición hasta que el usuario adivine el
//número.

const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

while (true) {
  const numeroUsuario = Number(process.argv("Adivina el número secreto (entre 1 y 100):"));
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
    console.log("Por favor, ingresa un número válido entre 1 y 100.");
    continue;
  }
  intentos++;
  if (numeroUsuario === numeroSecreto) {
    console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    break; 
  } else if (numeroUsuario < numeroSecreto) {
    console.log("El número secreto es mayor. Sigue intentando.");
  } else {
    console.log("El número secreto es menor. Sigue intentando.");
  }
}
