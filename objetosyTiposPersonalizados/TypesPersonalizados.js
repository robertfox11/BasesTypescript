"use strict";
(() => {
    //definimos que la variable flash es de tipo Hero
    let flash = {
        name: "barry Allen",
        age: 24,
        powers: ["Súper velocidad", "viaje en el tiempo"],
    };
    // variable con tipo hero
    let superman = {
        name: "Clark kent",
        age: 60,
        powers: ["Súper fuerza"],
        getName() {
            return this.name;
        },
    };
})();
