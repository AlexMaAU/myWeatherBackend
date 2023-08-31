const express = require('express')
const apiRouter = new express.Router()
const weatherController = require('../../controllers/weatherController')
const authGuard = require('../../middlewares/authGuard')

apiRouter.get('/weathers', authGuard, weatherController.index)
apiRouter.get('/weathers/others', authGuard, weatherController.other)

module.exports = apiRouter