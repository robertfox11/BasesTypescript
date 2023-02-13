"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
//# sourceMappingURL=args-rest.js.map