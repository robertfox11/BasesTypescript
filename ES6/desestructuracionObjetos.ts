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
  //   const { poder, vision } = avengers;
  //   console.log(poder, vision.toUpperCase());
  //   const printAvenger = (avengers: Avengers) => {
  //     console.log(avengers.vision);
  //   };
  //de otra manera para extraer un valor que queremos
  const printAvenger = ({ ironman, ...resto }) => {
    // console.log(ironman, resto);
  };
  printAvenger(avengers);
})();
