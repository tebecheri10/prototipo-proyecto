var modelo = document.getElementById("etiquetaModelo");
var precio = document.getElementById("etiquetaValor");
var resultado = document.getElementById("calcular");
var costoSeguro = "";

//objeto
function Vehiculo(tipo, anio, valor) {
  this.tipo = tipo;
  this.anio = anio;
  this.valor = valor;

  this.cotizar = function () {
    return "tu vehiculo esta listo para ser cotizado";
  };
}

var vehiculoUno = new Vehiculo("auto", "modelo", "precio");

//funcion para calcular el valor del seguro

function costo() {
  if (precio.value <= 100000) {
    costoSeguro = (precio.value * 2.5) / 100;
  } else {
    costoSeguro = (precio.value * 3) / 100;
  }
}

//evento click para el boton "calcular"
resultado.addEventListener("click", function () {
  costo();
  alert(gettext);

  document.getElementById("modalCosto").innerHTML = `
    <p> COSTO DEL SEGURO: ${costoSeguro} </p>`;

  document.getElementById("modalVehiculo").innerHTML = `
    <p> COSTO DEL SEGURO: ${gettext} </p>`;

  console.log(vehiculoUno);
  console.log(vehiculoUno.cotizar);
});
