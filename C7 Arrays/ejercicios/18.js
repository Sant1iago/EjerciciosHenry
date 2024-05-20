function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  
  // Creo la variable suma que guarde la suma de todos los elementos del arreglo
  var suma = resultadosTest.reduce((acumulador,numero) => acumulador + numero, 0);

  //Creo la variable promedio que guarde los promedios del arreglo utilizando suma
  var promedio = suma / resultadosTest.length;

  // Devuelvo el promedio

  return promedio;

}

module.exports = promedioResultadosTest;
