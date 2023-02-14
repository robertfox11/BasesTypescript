(() => {
  //las class abstract, sirven para crear otras clases o otras clases qeu espaeran
  //sirve para especificar el tipo
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class XMEN extends Mutante {
    salvarMundo() {
      return "Mundo a salvo!";
    }
  }
  class Villian extends Mutante {
    conquitarMundo() {
      return "Mundo conquistando";
    }
  }
  const wolverine = new XMEN("Wolverine", "Logan");
  const magneto = new Villian("Magento", "Magnus");
  //   console.log(wolverine.salvarMundo());
  //   console.log(magneto.conquitarMundo());

  //Funcion que recibe un parametro como tipo mutante y lo muestra el valor de la propuiedad
  const printName = (character: Mutante) => {
    console.log(character.realName);
  };
  //   printName(wolverine);
})();
