module.exports = function (app) {
  const models = app.get('models')
  app.get('/api/products', async function (req, res) {
    const products = await models.product.find()
    res.send(products)
  })
}
