/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

// El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable de un objeto dado.
// es decir que el metodo entrega por si mismo el nuevo arreglo con las claves separadas
    return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:


    var count = {};
    
    for (var char of string) {
        count[char] = string.split(char).length - 1;
    }
    
    return count;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var resultadoUpper = '';
  var resultadoLower = '';

  for(var i = 0; i < string.length; i++){
    if(string[i] === string[i].toUpperCase()){
      resultadoUpper += string[i];
    } else if (string[i] === string[i].toLowerCase()){
      resultadoLower += string[i];
    }
  }
  return resultadoUpper + resultadoLower;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  // separo la frase en palabras
  const palabras = frase.split(' ');

  // Invierto cada palabra
  const palabrasInvertidas = palabras.map(palabra => {
    return palabra.split('').reverse().join('');
  });

  // Union de las polabras
  const resultado = palabrasInvertidas.join(' ');
  return resultado;

}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  // de numero a string, para manipular mejor
  const numeroStr = numero.toString();

  // Ahora invierto el numero
  var reversoNumeroStr = numeroStr.split('').reverse().join('');


  if (numero == reversoNumeroStr){
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  // Utilizando "expresiones regulares" puse las tres letras dentro de lo que quiero que sea remplazado junto a la letra g de "global", lo que quiere decir que buscara las letras sin importar donde estén y las remplezará gracias a "replace" (lo que quiero remplazar, por lo que quiero remplazarlo)
  return string.replace(/[abc]/g, '');
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  // Utilizando el metodo "sort", puedo hacer que se ordenen en base a la longitud de la palabra diciendo que la palabra de la izquierda sera menor a la de la derecha de la comparacion
  return arrayOfStrings.sort((a,b) => a.length - b.length);
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  // El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
  // El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

  var nuevoArray = array1.filter(numero => array2.includes(numero));
  return nuevoArray;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
