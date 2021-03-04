module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const { ObjectId } = Schema

  const promotion = new Schema({
    id: ObjectId,
    product_id: String,
    start_date: Date,
    end_date: Date,
    percentage: Number
  })

  return mongooseClient.model('promotion', promotion)
}
