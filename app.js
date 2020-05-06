const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base || argv.b, argv.limite || argv.l).then(archivo => {
            console.log(`El archivo ${archivo} ha sido creado.`);
        }).catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base || argv.b, argv.limite || argv.l);
        break;
    default:
        console.log('Comando no reconocido.');
}