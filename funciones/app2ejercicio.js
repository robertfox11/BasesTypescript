"use strict";
// Funciones Básicas typescript Ejerccio
// funciones de tipo numero con parametro de tipo numeros
function sumar(a, b) {
    return a + b;
}
// funciones con parametro array de string
const contar = (heroes) => {
    return heroes.length;
};
//arrerglos de string
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//funcion que no devuleve nadaParametros por defecto 
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
//funcion con parametro de personas de tipo string   Rest?
const unirheroes = (...personas) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada" si no regresa nada sera un void
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
