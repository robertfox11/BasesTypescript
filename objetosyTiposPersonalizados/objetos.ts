(() => {
  //los dos punto simbolizan el tipo de datos typescript pone el tipo automatico
  //vamos a colocar despues de los dos punto vamos a colocar el tipo del dato de la variable
  //metodos dentro del objeto , getName?:() => {}
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => {};
  } = {
    name: "barry Allen",
    age: 24,
    powers: ["Súper velocidad", "viaje en el tiempo"],
  };

  //typescript
  flash = {
    name: "Clark kent",
    age: 60,
    powers: ["Súper fuerza"],
    getName() {
      return this.name;
    },
  };
  //flash.getName?.().,=> por que el metodo puede ser undefined
  console.log(flash.getName?.());
})();
