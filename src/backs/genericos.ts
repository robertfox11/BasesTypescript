//Dando un alias a esta exportacion
// import { Hero } from "./classes/Hero";
/**iomportando todos las clases y variables */
// import * as HeroClasses from "./classes/Hero";
/**Arreglo de poderes */
// import powers from "./data/power";

// const ironman = new HeroClasses.Hero("Ironman", 5, 55);
// const ironman = new Hero("Ironman", 1, 55);
// console.log(ironman);
// console.log(ironman.getPower());
/***************** */
import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../genericos/generics";

// import { Hero } from "./interfaces/Hero";
// import { Villain } from "./interfaces/villain";
// printObject(123);
// console.log(genericFunction((3.1416).toFixed(2)));
// console.log(genericFunction("Hola mundo".toUpperCase()));
// console.log(genericFunction(new Date().getDate()));

// console.log(genericFunctionArrow());
/**Cont interface */
// importando desde intercae index exportando todoas la interface
import { Villain, Hero } from "../interfaces";
const deapool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

// importamos de la interface manamos de esta t
console.log(genericFunctionArrow<Villain>(deapool).dangerLevel);
