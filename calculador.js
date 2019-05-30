
var codigoColores = [{color:"Negro", valor:0},
                    {color:"Cafe", valor:1},
                    {color:"Rojo", valor:2}, 
                    {color:"Naranja", valor:3},
                    {color:"Amarillo", valor:4},
                    {color:"Verde", valor:5},
                    {color:"Azul", valor:6},
                    {color:"Violeta", valor:7},
                    {color:"Gris", valor:8},
                    {color:"Blanco", valor:9}
    ]; 

var primeraBanda = document.getElementById("banda1");
var segundaBanda = document.getElementById("banda2");
var terceraBanda = document.getElementById("banda3");
var elBoton = document.getElementById("boton");
elBoton.addEventListener("click", calcule);
var valor = document.getElementById("valorResistencia");
var elBotonC = document.getElementById("botonc");
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
    let digito1 = getValor(primeraBanda.value);
    let digito2 = getValor(segundaBanda.value);
    let digito3 = getValor(terceraBanda.value);
    let unidades = " Ω";
    let resistencia = (digito1*10 + digito2) * Math.pow(10, digito3); 
    if (resistencia >= 1000) {
        resistencia = resistencia / 1000;
        unidades = "K" + unidades;
    } 
    document.getElementById('elvalor').innerHTML = "El valor de la resistencia es: " + resistencia + unidades;
}

function getColores() {
    let resistencia = parseInt(valor.value);
    let i = 10;
    while ((resistencia/i) > 1) {
      i = i * 10;
    }
    i = i / 10;
    let primerColor = Math.floor(resistencia / i);
    i = i / 10;
    let segundoColor = Math.floor((resistencia % (i * 10)) / i);
    let j = 0;
    if (i > 1) {
      j = 1;
      while ((i / Math.pow(10, j)) > 1) {
        j++;
      }
    }
    let tercerColor = j;
    primerColor = codigoColores[primerColor].color;
    segundoColor = codigoColores[segundoColor].color;
    tercerColor = codigoColores[tercerColor].color;
    let respHtml = "<div class=\"circ2 " + primerColor + "\"></div><div class=\"circ2 " + segundoColor + "\"></div><div class=\"circ2 " + tercerColor + "\"></div>"
    console.log(respHtml);
    document.getElementById('loscolores').innerHTML = respHtml + primerColor + " | " + segundoColor + " | " + tercerColor;
}

function bkgndBand(bandain) {
    if (bandain=="banda1") {
        document.getElementById("rcolor1").setAttribute("class", 'circ ' + primeraBanda.value);
    }
    if (bandain=="banda2") {
        document.getElementById("rcolor2").setAttribute("class", 'circ ' + segundaBanda.value);
    }
    if (bandain=="banda3") {
        document.getElementById("rcolor3").setAttribute("class", 'circ ' + terceraBanda.value);
    }
}