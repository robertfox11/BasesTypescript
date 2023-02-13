(() => {
  type Avengers = {
    name: string;
    weapon: string;
  };
  //Declaramos los tipos
  const ironman: Avengers = {
    name: "Ironman",
    weapon: "Armorsuit ",
  };

  const capitanAmerica: Avengers = {
    name: "Capitan America",
    weapon: "Escudo",
  };
  const thor: Avengers = {
    name: "Thor",
    weapon: "Mjolnir",
  };
  //tenemos el arreglo de avenger con el tipo
  const avengers: Avengers[] = [ironman, thor, capitanAmerica];
  //obtenemos al variable y el arreglo
  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
