function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  // itero con un for 

  for (var i = 0; i < numeros.length; i++){
    // comparo con los demas elementos del arreglo con un bucle
    for(var j = 0; j < i; j++){
      // comparo
      if(numeros[j] === numeros[i]){
        return numeros[i];
      }
    }
  }
  

}

module.exports = encontrarElementoRepetido;