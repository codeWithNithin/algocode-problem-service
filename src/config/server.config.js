const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  port: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL,
  NODE_ENV: process.env.NODE_ENV || 'development'
}