$(document).ready(function(){
  $("#agregar").click(function() {
    var numero = $("#lista li").length;
    $("ul").append("<li>" + (numero+1));
  });
  $("#eliminar").click(function() {
    $("ul li:first").remove();
  });
});
