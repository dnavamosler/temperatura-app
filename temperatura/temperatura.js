const axios = require('axios')



let temperatura = async(lat, long) => {


    let peticion = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=126f21435873f1d9570ae86211ef5e11`)



    if (peticion.status != 200)
        throw new Error(`Ha ocurrio un error al realizar la peticion con el servidor`)

    let temperatura = peticion.data.main.temp

    return temperatura

}

module.exports = {
    temperatura
}