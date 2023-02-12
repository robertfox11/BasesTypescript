(() => {
    // Funciones con parametros rest, el resto de argumentos lo captuarmos con el operador rest de 
    // distintos tipso (...restArgs: string[])
  const fullName = (firstName:string, ...restArgs: string[] ): string =>{
    return `${firstName} ${restArgs.join(' ')}`
  }

  const superman= fullName('clark', 'Joseph', 'Kent');

  console.log({superman});
  

})();
