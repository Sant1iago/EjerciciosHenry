function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var nuevoArray = [];

   for (var i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i][0] === 'a' || arrayOfStrings[i][0] === 'A'){
         nuevoArray.push(arrayOfStrings[i]);
      }
   }
   return nuevoArray;
}

module.exports = filter;
