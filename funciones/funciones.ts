(()=>{
    //funciones typescript basicas
    const hero:string = 'Flash';
    function returnName():string {
        return hero;
    }
    const activateBateSignal = () => {
        return "Batiseñal Activada!";
    };
    console.log(typeof activateBateSignal);

    const heroName = returnName();
})()