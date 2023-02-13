"use strict";
(() => {
    var _a;
    //los dos punto simbolizan el tipo de datos typescript pone el tipo automatico
    //vamos a colocar despues de los dos punto vamos a colocar el tipo del dato de la variable
    //metodos dentro del objeto , getName?:() => {}
    let flash = {
        name: "barry Allen",
        age: 24,
        powers: ["Súper velocidad", "viaje en el tiempo"],
    };
    //typescript
    flash = {
        name: "Clark kent",
        age: 60,
        powers: ["Súper fuerza"],
        getName() {
            return this.name;
        },
    };
    //flash.getName?.().,=> por que el metodo puede ser undefined
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
