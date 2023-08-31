const axios = require('axios')
const {units, key} = require('../config')

exports.getWeather = (lat, lon) => {
    return axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`)
}

exports.getOtherWeather = (idArray) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/group?id=${idArray}&units=${units}&appid=${key}`)
}