(()=>{
    // typo any
    let avenger:any = 123
    let exists;
    let power;
    avenger = "Dr Stranger";
    // console.log(avenger.charAt(0));
    // vamos a caster el avenger
    console.log((avenger as string).charAt(0));

    avenger = 15023545;
    // otro tipo de casteo
    console.log((<number>avenger).toFixed(2));
    
    console.log(exists);
    console.log(power);    
})()