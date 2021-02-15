'use strict';
var range = document.querySelector("#range");
var valoracionbtn = document.querySelector("#valoracionbtn");
valoracionbtn.addEventListener("click", function () {
    alert("Has valorado con " + range.value + " puntos");
});
var mostarcuenta = document.querySelector("#cuentabtn");
var cuenta = document.querySelector("#cuenta");
mostarcuenta.addEventListener("click", function () {
    alert("le informamos que su n\u00FAmero de cuenta bancaria es: " + cuenta.value);
});
var dia = document.querySelector("#diabtn");
var fecha1 = document.querySelector("#fecha");
dia.addEventListener("click", function () {
    alert("este es el " + Date);
});
