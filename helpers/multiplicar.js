const colors = require('colors');
const fs = require('fs');


const multiplicar = (base,hasta) => {
    let resultado, consola='';
    for(let i=1;i<=hasta;i++){
        consola += `${colors.bgCyan(base)} x ${i} = ${colors.green(base*i)}\n`;
        resultado += `${base} x ${i} = ${base*i}\n`;
    }    
    return [resultado, consola];
}

const crearArchivo = (base,listar,hasta) => {
    return new Promise((resolve, reject) => {
        const [resultado, consola] = multiplicar(base, hasta);
        fs.writeFile(`./salida/Tabla_${base}.txt`,resultado, err => {
            reject(err);
        })
        if (listar)
            console.log(consola);

        resolve(colors.blue(`Tabla_${base}.txt creado correctamente`))
    })    
}

module.exports = {
    crearArchivo
}