function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:

  if (objetoMisterioso.hasOwnProperty("numeroMisterioso")){
    var numeroMisterioso = objetoMisterioso.numeroMisterioso;
  }

  return numeroMisterioso * 5;

}


module.exports = multiplicarNumeroDesconocidoPorCinco;
