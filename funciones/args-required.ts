(() => {
    // Funciones con parametros tipo string en firtname y lastname puede ser un string o un bolean
  const fullName = (firstName:string, lastName:(string| boolean)): string => {
    if (!firstName) {
        //si no viene el nombre viene un error requerido
        throw new Error("Nombre Requerido");
    }
    return `${firstName} ${lastName}`;
  };
//   nombre de tipo any
  let noName: any;
  const name = fullName(noName, "stark");
  console.log({name});
})();
