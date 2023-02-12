"use strict";
(() => {
    //tipo de datos never, no puede tener un punto alcanzable, el codigo reventara y siempre terminara con un error
    const err = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    err('auxilio');
})();
