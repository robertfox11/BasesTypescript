(()=>{
    //ejecutamos el codigo de una manera aislada
    let avengers:number=10;
    console.log(avengers);
    
    const villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }else{
        console.log('Nos salvamos');
    }

    avengers = 123;
    //nos muesra el nombre de la variable junto a su valor
    //si declaramos como un Number = ejemplo  avengers = Number('33A') => nos mostrara NaN y javascript es considerado un numero 
    console.log({avengers});
    
})()