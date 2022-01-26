function encriptacion(texto){
    var esVocal = false;
    var encriptado = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
          encriptado = encriptado + texto[i].replace("a", "ai");
          esVocal = true;
        }
        if (texto[i] == "e") {
          encriptado = encriptado + texto[i].replace("e", "enter");
          esVocal = true;
        }
        if (texto[i] == "i") {
          encriptado = encriptado + texto[i].replace("i", "imes");
          esVocal = true;
        }
        if (texto[i] == "o") {
          encriptado = encriptado + texto[i].replace("o", "ober");
          esVocal = true;
        }
        if (texto[i] == "u") {
          encriptado = encriptado + texto[i].replace("u", "ufat");
          esVocal = true;
        }
        if (esVocal == false) {
          encriptado = encriptado + texto[i];
        } else {
          esVocal = false;
        }
      }
      return encriptado;
      
  }