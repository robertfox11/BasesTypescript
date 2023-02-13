(() => {
  // Creamos los tipos  creando estas propiedades
  type Coches = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void; //un funcion que no devuelve nada
  };
  // Objetos con el tipo personalizado con types con optional chaining (?)
  const batimovil: Coches = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
  };
  // Objetos con el tipo personalizado con types
  const bumblebee: Coches = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
      // El metodo disparar es opcional
      console.log("Disparando");
    },
  };

  /**Declaramos un tipo villano  types personalizados para un array*/

  type Villano = {
    nombre: string;
    edad?: number;
    mutante: boolean;
  };

  // Villanos debe de ser un arreglo de objetos personalizados
  const villanos: Villano[] = [
    {
      nombre: "Lex Luthor",
      edad: 54,
      mutante: false,
    },
    {
      nombre: "Erik Magnus Lehnsherr",
      edad: 49,
      mutante: true,
    },
    {
      nombre: "James Logan",
      edad: undefined,
      mutante: true,
    },
  ];

  /**Tipes personalizado multiples tipos */
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Charles = {
    poder: string;
    estatura: number;
  };
  const charles: Charles = {
    poder: "psiquico",
    estatura: 1.78,
  };

  //tipos Apocalipsis
  type Apocalipsis = {
    lider: boolean;
    miembros: string[];
  };
  const apocalipsis: Apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
  };

  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Charles | Apocalipsis;

  console.log(apocalipsis);

  mystique = charles;
  mystique = apocalipsis;
})();
