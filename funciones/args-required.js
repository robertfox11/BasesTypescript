"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error("Nombre Requerido");
        }
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName(noName, "stark");
    console.log({ name });
})();
//# sourceMappingURL=args-required.js.map