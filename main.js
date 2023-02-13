"use strict";
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
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
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    console.log(apocalipsis);
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr Stranger";
    console.log(avenger.charAt(0));
    avenger = 15023545;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '11'];
    numbers.push('14');
    console.log(numbers);
    const villians = ['omega rojo', 'Dorammu', 'Duende Verde'];
    villians.forEach(v => {
        console.log(v.toUpperCase());
    });
})();
(() => {
    let isBatman = true;
    let isSuperman = false;
    console.log({ isBatman });
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    const currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const err = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    err('auxilio');
})();
(() => {
    let isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = 123;
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna verde";
    const volcanNegro = `Héroe: volcan negro`;
    const abc = "abc";
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['Logan', 100, true];
    hero[0] = "50";
    hero[1] = 6;
    hero[2] = false;
    console.log(hero);
});
(() => {
    function callBatman() {
        return;
    }
    const superman = () => {
    };
    const a = callBatman();
    console.log(a);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = false) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no LastName'} `.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '-----'} `;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error("Nombre Requerido");
        }
        return `${firstName} ${lastName || 'no LastName'} `;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error("Nombre Requerido");
        }
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName(noName, "stark");
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBateSignal = () => {
        return "Batiseñal Activada!";
    };
    console.log(typeof activateBateSignal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: "barry Allen",
        age: 24,
        powers: ["Súper velocidad", "viaje en el tiempo"],
    };
    let superman = {
        name: "Clark kent",
        age: 60,
        powers: ["Súper fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
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
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    console.log(apocalipsis);
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    var _a;
    let flash = {
        name: "barry Allen",
        age: 24,
        powers: ["Súper velocidad", "viaje en el tiempo"],
    };
    flash = {
        name: "Clark kent",
        age: 60,
        powers: ["Súper fuerza"],
        getName() {
            return this.name;
        },
    };
    console.log((_a = flash.getName) === null || _a === void 0 ? void 0 : _a.call(flash));
})();
(() => {
    let myCustomVariables = "Robert";
    console.log(typeof myCustomVariables);
    myCustomVariables = 20;
    console.log(typeof myCustomVariables);
    myCustomVariables = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariables);
})();
//# sourceMappingURL=main.js.map