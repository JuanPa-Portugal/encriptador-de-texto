/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var codigosEncriptados = ["ai", "enter", "imes", "ober", "ufat"];
var vocales = ["a", "e", "i", "o", "u"];

var btnEncriptar = document.querySelector("#btn-encriptar"); //
btnEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  //capturando texto para encriptar
  var texto = document.querySelector("#input-texto").value; //
  var msgEncriptado = document.querySelector("#msg");

  var codificado = encriptacion(texto);
  msgEncriptado.value = codificado;
  
});

 
