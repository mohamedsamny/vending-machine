const mongoose = require('mongoose')
const username = process.env.DB_USERNAME || 'admin'
const password = process.env.DB_PASSWORD
const mongodbHost = process.env.DB_HOST
const databaseName = process.env.DB_NAME || 'vending-machine'
const uri = `mongodb+srv://${username}:${password}@${mongodbHost}/${databaseName}?retryWrites=true&w=majority`

module.exports = function (app) {
  mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true })
  mongoose.Promise = global.Promise
  app.set('mongooseClient', mongoose)
}
