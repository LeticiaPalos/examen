var largo = +prompt("Ingresa el largo");
console.log("Largo " + largo);
console.log();
var linea ="";
var cuadrado = [];
for(i = 0; i< largo; i++){
  if(i===0 || i===largo-1){
    for(j=0; j<largo; j++){
      linea+="*";
    }
  }else{
    for(j=0; j<largo; j++){
      if(j===0 || j===largo-1){
        linea+="*";
      }else {
        linea+=" ";
      }
    }
  }
  console.log("Línea [" + (i+1) + "]   " + linea);
  linea="";
}
