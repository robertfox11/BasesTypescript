(() => {
  //types, tipos personalizados, esta obligada para poner reglas o objetos quye estamos definiendo,
  // sirve para cambiar si al futuro queremos cambiar la variable de otro tipo
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };
  //definimos que la variable flash es de tipo Hero
  let flash: Hero = {
    name: "barry Allen",
    age: 24,
    powers: ["Súper velocidad", "viaje en el tiempo"],
  };

  // variable con tipo hero
  let superman: Hero = {
    name: "Clark kent",
    age: 60,
    powers: ["Súper fuerza"],
    getName() {
      return this.name;
    },
  };
})();
