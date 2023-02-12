"use strict";
(() => {
    // Funciones con parametros por default, una propiedad requeridad no puede seguier de una opcional, los argumentos 
    //opcionales tiene que ir al final
    const fullName = (firstName, lastName, upper = false) => {
        //validamos si upper es false
        if (upper) {
            return `${firstName} ${lastName || 'no LastName'} `.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '-----'} `;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
