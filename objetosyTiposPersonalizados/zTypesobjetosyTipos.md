Objetos y tipos personalizados
 //los dos punto simbolizan el tipo de datos typescript pone el tipo automatico
    //vamos a colocar despues de los dos punto vamos a colocar el tipo del dato de la variable
    //metodos dentro del objeto , getName?:() => {}
    let flash: {name: string, age?:number, powers:string[], getName?:() => {}} = {
        name: "barry Allen",
        age:24, 
        powers:['Súper velocidad', 'viaje en el tiempo']
    }
    
    //typescript 
    flash ={
        name:'Clark kent',
        age: 60,
        powers:['Súper fuerza'],
        getName(){
            return this.name;
        }
    }
    //flash.getName?.().,=> por que el metodo puede ser undefined
    console.log(flash.getName?.());

 //types, tipos personalizados, esta obligada para poner reglas o objetos quye estamos definiendo,
    // sirve para cambiar si al futuro queremos cambiar la variable de otro tipo 
    type Hero={
         name: string,
         age?: number,
         powers: string[],
         getName: ()=> string
    }
    //definimos que la variable flash es de tipo Hero
    let flash: Hero = {
        name: "barry Allen",
        age:24, 
        powers:['Súper velocidad', 'viaje en el tiempo']
    }
    
    
    // variable con tipo hero 
    let superman: Hero ={
        name:'Clark kent',
        age: 60,
        powers:['Súper fuerza'],
        getName(){
            return this.name;
        }
    
    }

//types, tipos personalizados, esta obligada para poner reglas o objetos quye estamos definiendo,
  // sirve para cambiar si al futuro queremos cambiar la variable de otro tipo, un avariable puede ser de diferentes tipos con typescript
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName: () => string;
  };
  let myCustomVariables: string | number | Hero = "Robert";
  console.log(typeof myCustomVariables);

  myCustomVariables = 20;
  console.log(typeof myCustomVariables);

  myCustomVariables = {
    name: "Bruce",
    age: 43,
    powers: [1],
  };
  console.log(typeof myCustomVariables);