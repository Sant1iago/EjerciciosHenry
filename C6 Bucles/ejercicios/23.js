function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  if (numero <= 1) {
    return false; // Los números menores o iguales a 1 no son primos
  }
  let divisor = 2;
  while (divisor <= Math.sqrt(numero)) {
    if (numero % divisor === 0) {
      return false; // Si el número es divisible por algún número entre 2 y su raíz cuadrada, no es primo
    }
    divisor++;
  }
  return true; // Si no se encontraron divisores, el número es primo
}

module.exports = esNumeroPrimo;
