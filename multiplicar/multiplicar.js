const fs = require('fs');
const colors = require('colors').argv;


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número`);
            return;
        }
        let data = '';
        console.log('=========================='.green);
        console.log(`=========tabla de ${base}`.green);
        console.log('=========================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        resolve(data);

    });
};


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);

            else {
                resolve(`tabla-${ base }.txt`);

            }

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
};