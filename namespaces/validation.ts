//Utilizar un namespace, es como un miniclase tenemos todas nuestra logica variables solo exponemos lo
// que necesitamos , es agrupador global, se usa bastante cuando se utiliza libreria o frameworks
namespace Validation {
  export const validateText = (text: string): boolean => {
    if (text.length > 3) {
      return true;
    } else {
      return false;
    }
  };
  const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

console.log(Validation.validateText("Rob"));
