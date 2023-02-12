"use strict";
(() => {
    // Funciones con parametros tipo string en firtname y lastname puede ser un string o un bolean
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            //si no viene el nombre viene un error requerido
            throw new Error("Nombre Requerido");
        }
        return `${firstName} ${lastName}`;
    };
    //   nombre de tipo any
    let noName;
    const name = fullName(noName, "stark");
    console.log({ name });
})();
