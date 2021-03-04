module.exports = function (app) {
  const models = app.get('models')

  const fetchProductsWithPromotions = async () => {
    const products = await models.product.find()
    const today = new Date()
    const promotions = await models.promotion.find({
      $and: [
        { start_date: { $lte: today } },
        { end_date: { $gte: today } }
      ]
    })

    return products.map((product) => {
      const activePromotion = promotions.find((promotion) => {
        return promotion.product_id == product._id
      })
      if (activePromotion !== undefined) { product.price = product.price - (product.price * activePromotion.percentage) }
      return product
    })
  }

  app.get('/api/products', async function (req, res) {
    const products = await fetchProductsWithPromotions()
    res.json(products)
  })

  app.post('/api/products/:id/vend', async function (req, res) {
    const product = await models.product.findById(req.params.id)
    product.quantity -= 1
    await product.save()

    const products = await fetchProductsWithPromotions()
    res.json(products)
  })

  app.post('/api/products/:id/refill', async function (req, res) {
    const product = await models.product.findById(req.params.id)
    product.quantity += 1
    await product.save()

    const products = await fetchProductsWithPromotions()
    res.json(products)
  })
}
