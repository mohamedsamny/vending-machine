module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const { ObjectId } = Schema

  const product = Schema({
    id: ObjectId,
    name: String,
    description: String,
    price: Number,
    quantity: Number
  })

  return mongooseClient.model('product', product)
}
