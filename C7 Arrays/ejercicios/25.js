function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var numerosPares = [];

  for (var i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 !== 0){
      continue;
    } else if (numeros[i] % 2 == 0){
      numerosPares.push(numeros);
    } else if (numeros[i] == []){
      return 0;
    }

  }
  return numerosPares.length;

}

module.exports = contarParesConContinue;
