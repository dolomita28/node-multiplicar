const colors = require('colors');

const argv = require('yargs')
                .options({
                    'b': {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                    }                    
                })
                .options({
                    'l': {
                    alias: 'listar',                    
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la impresión de la tabla por consola'
                    }                    
                })
                .options({
                    'h': {
                    alias: 'hasta',                    
                    type: 'number',
                    default: 10,
                    describe: 'Número máximo hasta el que se multiplica'
                    }                    
                })
                .check((arg,options)=>{
                    if (isNaN(arg.b))
                        throw colors.red('la base tiene que ser un número')

                        if (isNaN(arg.h))
                        throw colors.red('Hasta tiene que ser un número')

                    return true;
                })
                .argv;

module.exports = argv;                