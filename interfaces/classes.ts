(() => {
  //implmentamos interfaces a una clase
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }
  interface Human {
    age: number;
  }
  //decire a la clase como puede implementar de la interface que esta definidad
  class Mutant implements Xmen, Human {
    public age: number;
    public name: string;
    public realName: string;

    public mutantPower(id: number) {
      return this.name + "" + this.realName;
    }
  }
})();
