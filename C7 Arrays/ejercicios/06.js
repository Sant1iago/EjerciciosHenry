function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let inicio = 0;
  let fin = array.length-1;

  while(inicio < fin){
    let intercambio = array[inicio];
    array[inicio] = array[fin];
    array[fin] = intercambio;
    inicio++
    fin--
  }
  return array;
}

module.exports = invertirArray;
