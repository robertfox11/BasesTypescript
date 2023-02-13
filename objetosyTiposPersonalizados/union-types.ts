(() => {
  //types, tipos personalizados, esta obligada para poner reglas o objetos quye estamos definiendo,
  // sirve para cambiar si al futuro queremos cambiar la variable de otro tipo, un avariable puede ser de diferentes tipos con typescript
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName: () => string;
  };
  let myCustomVariables: string | number | Hero = "Robert";
  console.log(typeof myCustomVariables);

  myCustomVariables = 20;
  console.log(typeof myCustomVariables);

  myCustomVariables = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
  console.log(typeof myCustomVariables);
})();
