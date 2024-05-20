function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
  
  if(objeto.hasOwnProperty(propiedad)){
    delete objeto[propiedad]; 
  }
  return objeto;

}

module.exports = eliminarPropiedad;
