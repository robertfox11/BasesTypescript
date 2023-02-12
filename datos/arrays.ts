(()=>{
    //typescrit es tipo de arrays acepta tipo string y number
    const numbers = [1,2,3,4,5,6,7,8,9,10, '11'];
    numbers.push('14')//solo acepta string y numbers
    console.log(numbers);
    const villians = ['omega rojo', 'Dorammu', 'Duende Verde'];

    villians.forEach( v => {
        console.log(v.toUpperCase())
    })
    

})()