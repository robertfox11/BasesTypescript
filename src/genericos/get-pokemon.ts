import axios from "axios";
import { Pokemon } from "../interfaces/pokemon";

//funcion generica regresa una promesa de tipo string
export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  console.log("holoa mundo");
  //   await espera que la promesa se ejecute
  //utilizamos una interfaz no cambia la respuesta ahora va accer elpiticion va hacer tipo pokemon
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  //creamos un interface y la data lo hacemos de tipo pokemon la interface luce como es un objeto
  // console.log(resp.data.abilities[0].);

  return data;
};
