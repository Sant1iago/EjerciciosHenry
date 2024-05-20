function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  // variable para guardas los meses
  var mesesEncontrados = [];
// recorremos el arreglo 
  for(var i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      // guardamos los meses si es que son los que buscamos
      mesesEncontrados.push(array[i]);
    }
  }
// aseguramos haber encontrado los 3
if(mesesEncontrados.length === 3){
  return mesesEncontrados;
} else {
  return "No se encontraron los meses pedidos"
}

}

module.exports = mesesDelAño;
