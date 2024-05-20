function esVocal(letra) {
// La función recibe un argumento llamado letra el cual es un string.
// Retorna como resultado un string que indica si el argumento letra es una vocal.
// de lo contrario retorna el string "Dato incorrecto"
// Por ejemplo: 
// "a" ---> "Es vocal"
// "u" ---> "Es vocal"
// "n" ---> "Dato incorrecto"
// "texto largo" ---> "Dato incorrecto"
// Tu código:
  if (letra.length !== 1) {
      return "Dato incorrecto";
  }

  // Convierte la letra a minúscula para simplificar las comparaciones
  letra = letra.toLowerCase();

  // Verifica si la letra es una vocal
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
      return "Es vocal";
  } else {
      return "Dato incorrecto";
  }
}


module.exports = esVocal;
