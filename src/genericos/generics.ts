//funcino generica
export const printObject = (argm: any) => {
  console.log(argm);
};
//funcin genericas, => <T>de cualquier tipo de dato pa recibir el mismo tipo de dato del argumento y la salida del mismo tipo+
// Typescrip ayuda para ver el tipo de dato los gene4ricos nos ayuda saber que regresa una funcion
export function genericFunction<T>(arg: T): T {
  return arg;
}

export const genericFunctionArrow = <T>(arg: T) => arg;
