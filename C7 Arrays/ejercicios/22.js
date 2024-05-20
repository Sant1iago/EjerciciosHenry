function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabla6 = [];

  for (var i = 0; i <= 10; i++){
    var resultado = 6 * i;
    tabla6.push(resultado);
  }
  return tabla6;

}


module.exports = tablaDelSeis;
