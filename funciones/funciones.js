"use strict";
(() => {
    //funciones typescript basicas
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBateSignal = () => {
        return "Batiseñal Activada!";
    };
    console.log(typeof activateBateSignal);
    const heroName = returnName();
})();
