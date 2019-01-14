const axios = require('axios')



let location = async(direccion) => {
    let encodeUrl = encodeURI(direccion)

    let peticion = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyCNH5qvFdnoFjQ0sUZqXcQtKzk7cMmnTHE`)



    if (peticion.status != 200)
        throw new Error(`Ha ocurrio un error al realizar la peticion con el servidor`)

    let location = peticion.data.results[0]
    let coors = location.geometry.location


    return {
        direccion: location.formatted_address,
        latitud: coors.lat,
        longitud: coors.lng
    }



}

module.exports = {
    location
}