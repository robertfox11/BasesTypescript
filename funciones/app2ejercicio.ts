// Funciones Básicas typescript Ejerccio
// funciones de tipo numero con parametro de tipo numeros
function sumar( a:number, b:number ):number{
  return a + b;
}

// funciones con parametro array de string
const contar = ( heroes:string[] ) => {
  return heroes.length;
}
//arrerglos de string
const superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//funcion que no devuleve nadaParametros por defecto 
const llamarBatman = ( llamar:boolean = false ): void=> {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();

//funcion con parametro de personas de tipo string   Rest?
const unirheroes = ( ...personas:string[] ) => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero:number, texto:string, booleano:boolean, arreglo:string[] )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada" si no regresa nada sera un void
let noHaceNadaTampoco: (n:number, t:string, b:boolean, a:string[]) => void;
noHaceNadaTampoco = noHaceNada
