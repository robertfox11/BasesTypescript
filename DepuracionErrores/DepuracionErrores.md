*Aprenderemos el ¿por qué siempre compila a JavaScript?
*Para que nos puede servir el archivo de configuración de TypeScript
*Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
*Removeremos todos los comentarios en nuestro archivo de producción.
*Restringiremos al compilador que sólo vea ciertos archivos o carpetas
*Crearemos un archivo final de salida
\*Aprenderemos a cambiar la version de JavaScript de salida

## ¿Qué es el archivo tsconfig y para qué nos puede servir?

    es un archivo de configuracion hay valores por defecto recomendado, si queremos configuar podemos descomentar y utilizar, se redu ce a manadar objetos , booleanos
    https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

    opciones de compilador

### ¿Es posible la depuración del código de TypeScript?

    Mejores Herramienta de depueracion mostrar los logs de typescript, para saber la linea de codigo de typescript
    con el tsconfig.json tenemos que
    lo descomentamos y aparecera un tercer archivo es una extencion (.map)
    el mapa nos dice como esta construido el archivo
    y nos mostrara los logs de typescript
    en nuestro archivo de js nos da este enlace donde esta el archivo, nuestro source podemos realizar un breakpoint
    //# sourceMappingURL=appEjercicio.js.map
    "sourceMap": true,                                /*

### Remover comentario de los archivo de Javascript

    Podemos quitarlo en tsconfig.json
    "removeComments": true,                           /* Disable emitting comments. */

    los sourcemaps, solo debe estar listo en desarrollo en produccion se puede obviar y hacer de forma automatica

### Incluir y exluir carpetas y/o archivos

    los modules de node el transcripcion esta excluido de manera automatica, antes era manual
    en el tsconfig.json excluidmos todos los paths y expresion regular todo lo que esta en lo que necesitemos no genera codigo de javascript  al final de la linea
    con exclude, con include incluimos la carpeta nodemodules no es recomendado
        },
        "exclude": ["node_module s2 "],
         "include": ["node_modules"]

    }

## outFile Archivo de salida

    Se utiliza por que es muy dificil de leer y de mantener
    vamos a realizar a un unico archivo
    en tsconfig.json
    tenemos un directorio de salida  con main
    en los module => poenemos amd
    creara un archivo main.jsen la raiz
    "outFile": "./main.js",                                  /*
    veremos ahora mucho codigo en nuestro main.js por que coge todos los archivos de typescript que esta en la aplicaicon
    y lo vemos en el main.js transpilada
