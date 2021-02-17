
var modelo = document.getElementById("etiquetaModelo");
var precio = document.getElementById("etiquetaValor");
var resultado = document.getElementById("calcular");
var costoSeguro = "";






//------------------------objeto vehiculo----------------->
function Vehiculo(tipo, anio, valor) {
  this.tipo = tipo;
  this.anio = anio;
  this.valor = valor;

  this.cotizar = function () {
    return "tu vehiculo esta listo para ser cotizado";
  };
}

var vehiculoUno = new Vehiculo("auto", "modelo", "precio");






//array para local Storage
ultimaCotizacion = [];





//funcion para calcular el valor del seguro

function costo() {
  if (precio.value <= 100000) {
    costoSeguro = (precio.value * 2) / 100;
  } else {
    costoSeguro = (precio.value * 3) / 100;
  }
}



//evento click para el boton "calcular"

resultado.addEventListener("click", function () {
  const combo = document.getElementById("tipo-vehiculo");
  const selected = combo.options[combo.selectedIndex].text;

  costo();

  document.getElementById("modalVehiculo").innerHTML = `
    <p> Tipo de vehiculo: ${selected} </p>`;

  document.getElementById("modalModelo").innerHTML = `
    <p> Modelo: ${modelo.value} </p>`;

  document.getElementById("modalCosto").innerHTML = `
    <p> Costo del seguro: $${costoSeguro} </p>`;

  //vacia el array para agregar de nuevo con el push
  ultimaCotizacion.splice(0, 3);
  //push al array
  ultimaCotizacion.push(modelo.value, selected, costoSeguro);

  //De array a JSON
  utlimaCotizacionString = JSON.stringify(ultimaCotizacion);
  //Local Storage primero elimina el anterior y crea uno nuevo
  localStorage.removeItem("ultima cotizacion", utlimaCotizacionString);
  localStorage.setItem("ultima cotizacion", utlimaCotizacionString);
  ToastUltimaCotizacion()

});




/*------------mostrar Toast-------------*/
$(document).ready(function () {
  $(".toast").toast("show");
});



//funcion get item para incluir en el Toast

function ToastUltimaCotizacion() {
  getLocalStorage = localStorage.getItem("ultima cotizacion");
  arrayGetLocalStorage = JSON.parse(getLocalStorage);
  console.log(arrayGetLocalStorage);

  liArray = document.getElementById("list-toast-body").innerHTML = `
            <li>Tipo de vehiculo:${arrayGetLocalStorage[1]} </li>
            <li>Año de vehiculo:${arrayGetLocalStorage[0]}</li>
            <li>Valor del Seguro: $${arrayGetLocalStorage[2]}</li>
      
       `
};
