const argv = require('./config/yargs').argv;
const colors = require('colors').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(`La tabla es :\n${tabla}`))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', `${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}