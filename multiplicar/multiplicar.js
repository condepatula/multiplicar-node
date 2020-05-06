const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`La base ${base}, no es un número!`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`.green);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    let data = '';

    console.log('======================'.green);
    console.log(`Tabla de ${base}`.yellow);
    console.log('======================'.red);

    if (!Number(base)) {
        console.log(`La base ${base} debe ser un número.`);
        return;
    } else if (!Number(limite)) {
        console.log(`El límite ${limite} debe ser un número.`);
        return;
    }

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    console.log(data);
};

module.exports = {
    crearArchivo,
    listarTabla
};