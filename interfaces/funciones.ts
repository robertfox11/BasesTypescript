() => {
  //restringir una funcion para que lusca de esta manera interfaces en las funciones
  interface addTwoNumbers {
    (a: number, b: number): number;
  }
  let addNumbersFunction: addTwoNumbers;
  addNumbersFunction = (a: number, b: number) => {
    return 10;
  };
};
