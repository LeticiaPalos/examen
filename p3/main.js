function Telefono(numero, marca, color){
    this.numero = numero,
    this.marca = marca,
    this.color = color,
    this.llamadas = 0;
    this.marcar = function(){
      this.llamadas++;
      console.log("El número " + this.numero + " tiene " + this.llamadas + " llamadas recibidas");
    };
}

var Juan = new Telefono("2859566038","Iphone","Negro");
var Karla = new Telefono("2299456630","Motorola","Blanco");

Juan.marcar();
Karla.marcar();
Juan.marcar();
Karla.marcar();
Karla.marcar();
