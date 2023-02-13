(() => {
  //es mejor hacer un tipo que tenemos nuestro objeto
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };
  const avengers = {
    nick: "Samuel L Jackson",
    ironman: "Robert Downey JR",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };

  const printAvenger = ({ ironman, ...resto }) => {
    console.log(ironman, resto);
  };

  //Objetios de arrays podemos desestructurar como queramos
  const avengerSArray: [string, boolean, number] = ["Cap. América", true, 124];

  const [capi, ironman, serialNum] = avengerSArray;
  // console.log({ ironman, capi });
})();
