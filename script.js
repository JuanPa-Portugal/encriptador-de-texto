
 //encriptando texto
var btnEncriptar = document.querySelector("#btn-encriptar"); //boton para encriptar


//capturando texto para encriptar con el botton encriptar
btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var divSwitch = document.querySelector("#switch-div")
    divSwitch.classList.add("switch")
    var texto = document.querySelector("#input-texto"); 
    var text =texto.value
    var msgEncriptado = document.querySelector("#msg");
    var btnCopiar = document.querySelector("#btn-copy");
    btnCopiar.classList.remove("btn-copiar");
  //llamando a la funcion encriptacion para encriptar texto
  var codificado = encriptacion(text);
  texto.value =""
  msgEncriptado.value = codificado;// deveulve texto encriptado en la caja de resultado
});


//desencriptando texto

 var btnDesencriptar= document.querySelector("#btn-desencriptar");

 //capturando texto para desencriptar con el botton desencriptar
    btnDesencriptar.addEventListener("click",function(e){
        e.preventDefault();
        var title=document.querySelector("#title");
        title.innerHTML="Mensaje desencriptado";// cambia el titulo al hacer click en desencriptar 
        var textoParaDecodificar = document.querySelector("#input-texto").value;
        //llamando a la funcion encriptacion en su funcion desencriptar texto
        var decodificado= desencriptacion(textoParaDecodificar);
        var desencriptado = document.querySelector("#msg");
        desencriptado.value = decodificado;//devuelve texto desencriptado en la caja de resultado
    }) 
// boton para copiar texto encriptado en el portapapeles
var btnCopiar = document.querySelector("#btn-copy");
btnCopiar.addEventListener("click",function(){
    let texto = document.querySelector("#msg");
    texto.select();
    document.execCommand("copy");
})

 
