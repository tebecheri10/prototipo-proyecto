/*var modelo = document.getElementById("etiquetaModelo");
var precio = document.getElementById("etiquetaValor");*/
//var resultado = document.getElementById("calcular");
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

//evento click para el boton "calcular"

/*resultado.addEventListener("click",*/

$("#calcular").click(function () {
  var modelo = $("#etiquetaModelo").val(); /* getElement*/
  var precio = $("#etiquetaValor").val(); /* getElement*/

  //funcion para calcular el valor del seguro
  function costo() {
    if (precio /*.value*/ <= 100000) {
      costoSeguro = (precio * 1.5) / 100;
    } else {
      costoSeguro = (precio * 2) / 100;
    }
  }

  const combo = document.getElementById("tipo-vehiculo");
  const selected = combo.options[combo.selectedIndex].text;

  costo();

  document.getElementById("modalVehiculo").innerHTML = `
    <p> Tipo de vehiculo: ${selected} </p>`;

  document.getElementById("modalModelo").innerHTML = `
    <p> Modelo: ${modelo} </p>`;

  document.getElementById("modalCosto").innerHTML = `
    <p> Costo de tu vehiculo: $${precio} </p>`;

  document.getElementById("responsabilidad-civil").innerHTML = `
    <h5>$${costoSeguro}</h5> `;

  document.getElementById("terceros-completo").innerHTML = `
    <h5>$${costoSeguro + (costoSeguro * 10) / 100}</h5> `;

  document.getElementById("todo-riesgo").innerHTML = `
    <h5>$${costoSeguro + (costoSeguro * 30) / 100}</h5> `;

  //vacia el array para agregar de nuevo con el push
  ultimaCotizacion.splice(0, 3);
  //push al array
  ultimaCotizacion.push(modelo, selected, costoSeguro);

  //De array a JSON
  utlimaCotizacionString = JSON.stringify(ultimaCotizacion);
  //Local Storage primero elimina el anterior y crea uno nuevo
  localStorage.removeItem("ultima cotizacion", utlimaCotizacionString);
  localStorage.setItem("ultima cotizacion", utlimaCotizacionString);
  ToastUltimaCotizacion();
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
           
       `;
}

//efectos hover en la seleccion de seguro
$(".card-uno").mouseover(function () {
  $(".card-uno").css("transform", "scale(1.1)");
});
$(".card-uno").mouseout(function () {
  $(".card-uno").css("transform", "scale(1)");
});
$(".card-dos").mouseover(function () {
  $(".card-dos").css("transform", "scale(1.1)");
});
$(".card-dos").mouseout(function () {
  $(".card-dos").css("transform", "scale(1)");
});
$(".card-tres").mouseover(function () {
  $(".card-tres").css("transform", "scale(1.1)");
});
$(".card-tres").mouseout(function () {
  $(".card-tres").css("transform", "scale(1)");
});

//---------------------------------------------------scroll------

$(document).ready(function () {
  $("#boton-cotizar-automotor").click(function () {
    $("body,html").animate(
      {
        scrollTop: $("#target-cotizador").offset().top,
      },
      60 //speed
    );
  });
  $(".btn-contactar").click(function () {
    $("body,html").animate(
      {
        scrollTop: $("#target-contacto").offset().top,
      },
      60 //speed
    );
  });
});

/*--------------------------boton confirmar solicitud (validar formulario)----*/
$(".boton-solicitud").click(function () {
  if (
    $("#nombreyapellido").val() == 0 ||
    $("#numeroTelefono").val() == 0 ||
    $("#email1").val() == 0
  ) {
    $(".boton-solicitud").attr("data-target", "");
  } else {
    $(".boton-solicitud").attr("data-target", "#modalSolicitud");
  }
});

//---------------------------AJAX-----------------------------------
$(document).ready(function () {
  $("#boton-cotizar-vida").click(function () {
    $.get("../sucursales.json", function (datosAsesor) {
      console.log(datosAsesor);

      $(".modal-asesor-body").html(
        "<ul>" +
        "<li> nombre: " +
        datosAsesor.nombre +
        "</li>" +
        "<li> sucursal: " +
        datosAsesor.sucursal +
        "</li>" +
        "<li> telefono: " +
        datosAsesor.telefono +
        "</li>" +
        "<li> direccion: " +
        datosAsesor.direccion +
        "</li>" +
        "</ul>"
      );
    });
  });

  $("#boton-cotizar-hogar").click(function () {
    $.get("../sucursales.json", function (datosAsesor) {
      console.log(datosAsesor);

      $(".modal-asesor-body").html(
        "<ul>" +
        "<li> nombre: " +
        datosAsesor.nombre +
        "</li>" +
        "<li> sucursal: " +
        datosAsesor.sucursal +
        "</li>" +
        "<li> telefono: " +
        datosAsesor.telefono +
        "</li>" +
        "<li> direccion: " +
        datosAsesor.direccion +
        "</li>" +
        "</ul>"
      );
    });
  });
});
