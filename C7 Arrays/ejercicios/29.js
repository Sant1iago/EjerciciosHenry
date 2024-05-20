function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0){
    return null;
  }

  // veo el maximo del arreglo para conocer su suma total
  var max = Math.max(...numeros);

  // utilizo formula de conteo, (n(n+1))/2 con n = max

  var sumaTotal = (max * (max+1))/2;

  // verifico la suma que me dan los valores dentro del array
  var sumaReal = numeros.reduce((total,num) => total + num, 0);

  // Ahora solo toca ver cual es el numero que falta
  var numeroFaltante = sumaTotal - sumaReal;

  // Si no hay numero faltante debo devolver null
  if(numeroFaltante === 0){
    return null;
  }

  return numeroFaltante;
}

module.exports = encontrarNumeroFaltante;