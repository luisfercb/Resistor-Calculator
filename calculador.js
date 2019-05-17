class codigo {
    constructor(color, numero, multip) {
        this.color = color;
        this.numero = numero;
        this.multip = multip;
    }
}

var codigoColores = ["negro", "cafe", "rojo", "naranja", "amarillo", "verde", "azul", "violeta", "gris", "blanco"];

var primeraBanda = document.getElementById("banda1");
var segundaBanda = document.getElementById("banda2");
var terceraBanda = document.getElementById("banda3");
var valor = document.getElementById("valorResistencia");
var elBoton = document.getElementById("boton");
var elBotonC = document.getElementById("botonc");

elBoton.addEventListener("click", calcule);
elBotonC.addEventListener("click", getColores);

var NEGRO = new codigo("negro", 0, 0);
var CAFE = new codigo("cafe", 1, 1);
var ROJO = new codigo("rojo", 2, 2);
var NARANJA = new codigo("naranja", 3, 3);
var AMARILLO = new codigo("amarillo", 4, 4);
var VERDE = new codigo("verde", 5, 5);
var AZUL = new codigo("azul", 6, 6);
var VIOLETA = new codigo("violeta", 7, 7);
var GRIS = new codigo("gris", 8, 8);
var BLANCO = new codigo("blanco", 9, 9);


function getValor(banda) {
    switch (banda)
    {
        case "negro":
            return parseInt(NEGRO.numero);
            break;
        
        case "cafe":
            return parseInt(CAFE.numero);
            break;
        
        case "rojo":
            return parseInt(ROJO.numero);
            break;
        
        case "naranja":
            return parseInt(NARANJA.numero);
            break;
        
        case "amarillo":
            return parseInt(AMARILLO.numero);
            break;
        
        case "verde":
            return parseInt(VERDE.numero);
            break;
        
        case "azul":
            return parseInt(AZUL.numero);
            break;
        
        case "violeta":
            return parseInt(VIOLETA.numero);
            break;
        
        case "gris":
            return parseInt(GRIS.numero);
            break;
        
        case "blanco":
            return parseInt(BLANCO.numero);
            break;
        default:
            return parseInt(NEGRO.numero);
    }
        
}

function calcule() {
    var digito1 = getValor(primeraBanda.value);
    var digito2 = getValor(segundaBanda.value);
    var digito3 = getValor(terceraBanda.value);
    var unidades = " Ohms";
    var resistencia = (digito1*10 + digito2) * Math.pow(10, digito3); 
    console.log(digito1, digito2, digito3);

if (resistencia >= 1000) {
    resistencia = resistencia / 1000;
    unidades = "K" + unidades;
}
    
    alert("El valor de la resistencia es de: " + resistencia + unidades);
  
}

function getColores() {
    var resistencia = parseInt(valor.value);
    var i = 10;
    while ((resistencia/i) > 1) {
      i = i * 10;
    }
    i = i / 10;
    var primerColor = Math.floor(resistencia / i);
    i = i / 10;
    var segundoColor = Math.floor((resistencia % (i * 10)) / i);
    var j = 0;
    if (i > 1) {
      j = 1;
      while ((i / Math.pow(10, j)) > 1) {
        j++;
      }
    }
    var tercerColor = j;
    alert("Los colores son: " + codigoColores[primerColor] + ", " + codigoColores[segundoColor] + ", " + codigoColores[tercerColor]);
  }
