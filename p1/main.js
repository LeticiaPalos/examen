var suma = 0;
do{
  var ingreso = prompt("Ingresa un número");
  if(!isNaN(ingreso)){
    suma+= parseInt(ingreso);
  }

}while(ingreso != "fin");
alert("Suma" +suma);
