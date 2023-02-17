//decorador de forma tradicion con la palabra function
function printToConsole(constructor: Function) {
  console.log(constructor);
}

//Factory Constructor retorna una funcion cuando la clase de nuestra funcion
// va ser compilada
const printToConsoleConditional = (print: boolean): Function => {
  if (print) {
    return printToConsole; //mandamos como referencia esta funcion
  } else {
    return () => console.log("hola mundo printToconsoleConditional");
  }
  //   return () => console.log("hola mundo");
};

/**Bloquear prototipo de la clase */
const bloquearPrototipo = function (constructor: Function) {
  //bloqueamos proviene la modificaicon, constructor y constructor.protype
  //prevenir si alguien una expancion o metodo de una clase
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//Factory decorator validaction para decorador de metodos
function CheckValidPokemonId() {
  //se dispara con un metodo que recibe parametro
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // revisamos el valior que se recibe
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe estar 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
    // descriptor.value = () => {
    //   console.log("holoa mundo check");
    // };
    console.log({ target, propertyKey, descriptor });
  };
}

//no quiero  que se cambie la propiedad realizamos la funcion devuelvuem la function
function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        //this con el ggetter
        console.log(this);
        return "Robert";
      },
      set(this, val) {
        //        console.log(this, val);
        //Validamos que no se modifique la propiedad
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
    // console.log({ target, propertyKey, descriptor });
  };
}

// @printToConsole
@bloquearPrototipo //bloquear prototipo
@printToConsoleConditional(false) //factorydecorator
export class PokemonClass {
  //NO QUIERO QUE SE CAMBIE
  @readonly()
  public publicApi: string = "https://pokeapi.co/api/v2";
  constructor(public name: string) {}

  //Creacion de Decoradores de metodos
  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    //Validacion de pokemon con un decorador
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
