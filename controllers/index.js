module.exports = function (app) {
  return {
    api: require('./api')(app)
  }
}
