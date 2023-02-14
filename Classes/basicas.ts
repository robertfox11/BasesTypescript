(() => {
  class Avenger {
    private name: string;
    private team: string;
    public realName: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }
    //private accedemos en la misma clase
    //static, accedemos desde la propiedad de la clase
    constructor(name: string, team: string, realName: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
    //Metodos publicos y privados
    public bio() {
      return `${this.name} (${this.team})`;
    }
  }
  const antman: Avenger = new Avenger("AntMan", "Capitan", "Scott Lang");
  //   console.log(antman.bio());
  //llamar metodos estaticos accedidos por el nombre de la clase no de la instancia
  //   console.log(Avenger.getAvgAge());
})();
