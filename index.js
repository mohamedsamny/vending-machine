const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const mongoose = require('./mongoose')
mongoose(app)
const models = require('./models/index')(app)
app.get('/api/products', async function (req, res) {
  const products = await models.product.find()
  res.send(products)
})

app.listen(port, function () {
  console.log(`listening on ${port}`)
})
