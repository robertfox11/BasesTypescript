(() => {
    // Funciones con parametros opcional en lastname con un signo de interrogacion
  const fullName = (firstName:string, lastName?:string): string => {
    if (!firstName) {
        //si no viene el nombre viene un error requerido
        throw new Error("Nombre Requerido");
    }
    return `${firstName} ${lastName || 'no LastName'} `;
  };
 
  const name = fullName('Tony');
  console.log({name});
})();
