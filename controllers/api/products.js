module.exports = function (app) {
  const models = app.get('models')
  app.get('/api/products', async function (req, res) {
    const products = await models.product.find()
    res.json(products)
  })

  app.post('/api/products/:id/vend', async function (req, res) {
    const product = await models.product.findById(req.params.id)
    product.quantity -= 1
    await product.save()

    const products = await models.product.find()
    res.json(products)
  })

  app.post('/api/products/:id/refill', async function (req, res) {
    const product = await models.product.findById(req.params.id)
    product.quantity += 1
    await product.save()

    const products = await models.product.find()
    res.json(products)
  })
}
