module.exports = function (app) {
  return {
    products: require('./products')(app)
  }
}
