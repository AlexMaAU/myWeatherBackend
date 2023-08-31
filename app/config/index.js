const dotenv = require('dotenv')
dotenv.config()
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

module.exports = {
    port: process.env.PORT || 8080,
    api: {
        prefix: process.env.API_PREFIX || '/api/v1'
    },
    units: process.env.UNITS,
    key: process.env.KEY,
    db_connect: process.env.DB_CONNECTION,
    jwt_key: process.env.JWT_KEY
}