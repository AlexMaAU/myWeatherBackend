const openweathermapService = require('../services/openweathermapService')

exports.index = async (req, res) => {
    const {lat, lon} = req.query
    if(!lat || !lon) {
        return res.status(400).json({ error: 'lat or lon is empty' });
    }
    const data = await openweathermapService.getWeather(lat, lon)
    res.status(201).json(data.data)
}

exports.other = async (req, res) => {
    const {id} = req.query
    if(!id) {
        return res.status(400).json({ error: 'Id is empty' });
    }
    const data = await openweathermapService.getOtherWeather(id)
    res.status(201).json(data.data)
}