(() => {
  //Interfaces, no tiene representacino fisica en js, diferencia entre el tipo es que el interface puede expandirse añadir mas cosas, la interface no define el comportamiento de una clase, son importante para realizar peticiones http, interface no implementa metodos
  interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }
  let flash: Hero = {
    name: "barry Allen",
    age: 24,
    powers: [1, 2],
  };

  // variable con tipo hero
  let superman: Hero = {
    name: "Clark kent",
    age: 60,
    powers: [4],
    getName() {
      return this.name;
    },
  };
  console.log(superman);
})();
