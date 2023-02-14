(() => {
  //Constructor privado, para controlar la manera la cual sus instancia son ejecutadas, para menejar singletown una instancia solo con una unica instancia.controla las clases,
  //   si es private solo puede ser llamado dentro de la misma clase
  class Apocalipsis {
    //declaramos un propiedad static
    static intance: Apocalipsis;
    private constructor(public name: string) {}
    //regresara una instancia de apocalipsis
    static callApocalipsis(): Apocalipsis {
      //Si no existe creamos una nueva instancia
      if (!Apocalipsis.intance) {
        Apocalipsis.intance = new Apocalipsis("Soy Apocalipsis..el unico");
      }
      //retornamos la instancia el principio singletown
      return Apocalipsis.intance;
    }
    //cambiar nombre
    changeName(newName: string): void {
      this.name = newName;
    }
  }
  //llamar el metodo estatico de una instancia de apocalipsis
  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  apocalipsis.changeName("Xavier");
  //todos tiene el mismo valor de nombre por que esta apuntando a la misma instancia de Apocalipsis
  console.log(apocalipsis, apocalipsis2);
})();
