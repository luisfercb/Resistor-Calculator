
var codigoColores = [{color:"negro", valor:0},
                    {color:"cafe", valor:1},
                    {color:"rojo", valor:2}, 
                    {color:"naranja", valor:3},
                    {color:"amarillo", valor:4},
                    {color:"verde", valor:5},
                    {color:"azul", valor:6},
                    {color:"violeta", valor:7},
                    {color:"gris", valor:8},
                    {color:"blanco", valor:9}
    ]; 

var primeraBanda = document.getElementById("banda1");
var segundaBanda = document.getElementById("banda2");
var terceraBanda = document.getElementById("banda3");
var valor = document.getElementById("valorResistencia");
var elBoton = document.getElementById("boton");
var elBotonC = document.getElementById("botonc");

elBoton.addEventListener("click", calcule);
elBotonC.addEventListener("click", getColores);

function getValor(banda) {
    let count=0, paso=true;
    while (paso){
        if (banda != codigoColores[count].color){
            count += 1;
        }
        else {
            paso = false;
        }
    }
    return codigoColores[count].valor;
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
    alert("Los colores son: " + codigoColores[primerColor].color + ", " + codigoColores[segundoColor].color + ", " + codigoColores[tercerColor].color);
  }
