
module.exports = function (app, parent) {
  var proto = app.settings
  app.settings = {}
  if (parent) {
    app.settings.__proto__ = parent.settings
  } else {
    app.settings.__proto__ = proto
    app.on('mount', function (parent) {
      app.settings.__proto__ = parent.settings
    })
  }
  return app
}

