(()=>{
    // Definicion de strings si es importante poner el tipo si no ponemos el tipo nos dara el tipo any y no tenemos ayuda importante terminar con punto y coma
    const batman: string = 'Batman';
    const linternaVerde: string= "Linterna verde";
    const volcanNegro:string = `Héroe: volcan negro`;
    const abc:string="abc"

    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    // leemos un array de texto para realizar lo que hace el interprete, si existe el dato lo hace mayuscula si no mostramos un mensaje.
    // con la option ? podemos evaluar si existe o no 
    console.log(batman[10]?.toUpperCase() || 'No esta presente')
    
})()