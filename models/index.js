module.exports = function (app) {
  return {
    product: require('./product.model')(app),
    promotion: require('./promotion.model')(app)
  }
}
