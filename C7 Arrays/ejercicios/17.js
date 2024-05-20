function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((acumulador, numero) => acumulador + numero, 0);
  //reduce es una funcion que reduce cada elemento del array, en el cual despues devuleve un unico valor
  //en este caso, utilizo acumulador como argumento donde guardo las sumas, numero como representacion de numeros
  //y 0 es mi valor inicial para que reduce empiece a trabajar, es un numero agregado, sería el neutro de la operacion a realizar
}

module.exports = agregarNumeros;
