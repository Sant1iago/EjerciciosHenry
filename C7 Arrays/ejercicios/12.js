function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  
  // Itera sobre cada elemento del array
  for (let i = 0; i < array.length; i++) {
    // Convierte el elemento actual a mayúsculas
    array[i] = array[i].toUpperCase();
  }
  // Retorna el array modificado
  return array;
}

module.exports = convertirStringAMayusculas;
