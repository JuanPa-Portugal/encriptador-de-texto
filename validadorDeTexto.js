function soloLetras(e){
let key =e.keyCode ||e.wichch;
let teclado = String.fromCharCode(key).toLocaleLowerCase();
 const letras =" abcdefghijklmnñopqrstuvwxyz";
 const especiales="8-37-38-46-164";
tecladoEspecial=false;
for(var i in especiales){
    if(key==especiales[i]){
         tecladoEspecial=true;
         break;
       }
   }
 if(letras.indexOf(teclado == -1 && !tecladoEspecial)){
    return false;
 }

}