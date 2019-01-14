const argv = require('./yargs').argv
const locacion = require('./locacion/locacion')
const temperatura = require('./temperatura/temperatura')
const colors = require('colors')

let getInfo = async(direccion) => {

    try {

        let ubicacion = await locacion.location(direccion)
        let temp = await temperatura.temperatura(ubicacion.latitud, ubicacion.longitud)

        return (`La temperatura en ${ubicacion.direccion} es de ${temp} grados centigrados.`)

    } catch (error) {
        return `ha ocurrido un error al buscar la temperatura.`
    }


}

getInfo(argv.direccion)
    .then(data => console.log(data.red))