(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructo avenger llamado");
    }
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }
  class Xmen extends Avenger {
    //llamamso el Avenger
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor XMEN");
    }
    getFullNameDesdeXmen() {
      //si queremos llamar el metodo des de la clase Avenger
      console.log(super.getFullName());
    }

    public get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    //set solo espera un valor
    public set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre deb ser mayor de 3 letras");
      }
      this.name = name;
    }
  }

  //   const wolverine = new Xmen("Wolverine", "Logan", true);
  //   console.log(wolverine.getFullNameDesdeXmen());
  //   wolverine.getFullNameDesdeXmen(); //Accedmo la funcion y de un metodo protected de la clase principal

  //   console.log(wolverine.fullName); //mostrando valor de un getter
  //   wolverine.fullName = "Ro"; //utilizando set para obtener el valor, tambien tiene validacion
  //   console.log(wolverine.fullName); //mostrando valor de un
})();
