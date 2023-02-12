"use strict";
(() => {
    var _a;
    // Definicion de strings si es importante poner el tipo si no ponemos el tipo nos dara el tipo any y no tenemos ayuda importante terminar con punto y coma
    const batman = 'Batman';
    const linternaVerde = "Linterna verde";
    const volcanNegro = `Héroe: volcan negro`;
    const abc = "abc";
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    // leemos un array de texto para realizar lo que hace el interprete, si existe el dato lo hace mayuscula si no mostramos un mensaje.
    // con la option ? podemos evaluar si existe o no 
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
