"use strict";
(() => {
  // Funciones con parametros opcional en lastname con un signo de interrogacion
  const fullName = (firstName, lastName) => {
    //psamos como opcion si no viene el nombre no lastname
    return `${firstName} ${lastName || "no LastName"} `;
  };
  const name = fullName("Tony");
  console.log({ name });
})();
