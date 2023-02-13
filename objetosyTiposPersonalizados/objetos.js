"use strict";
(() => {
    var _a;
    let flash = {
        name: "barry Allen",
        age: 24,
        powers: ["Súper velocidad", "viaje en el tiempo"],
    };
    flash = {
        name: "Clark kent",
        age: 60,
        powers: ["Súper fuerza"],
        getName() {
            return this.name;
        },
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
//# sourceMappingURL=objetos.js.map