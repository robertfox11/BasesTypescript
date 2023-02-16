import { getPokemon } from "./genericos/get-pokemon";
getPokemon(4)
  .then((poke) => console.log(poke.abilities))
  .catch((e) => console.log(e))
  .finally(() => console.log("Fin de dejecucion"));
