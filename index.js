const nodemon = require("nodemon")

var server
var started = false

module.exports = function () {
  this.nodemon = function (opts) {
    return new Promise((resolve, reject) => {
      if (started) { server.emit("restart") }
      else {
        server = nodemon(opts)
          .on("start", function () {
            this.log("nodemon started.")
            resolve()
          }.bind(this))
          .on("restart", function () {
            this.log("nodemon restarting...")
            resolve()
          }.bind(this))
          .on("quit", function () {
            this.warn("nodemon quit.")
          }.bind(this))
          .on("crash", function () {
            this.error("script crashed for some reason")
            reject()
          }.bind(this))
      }
    })
  }
}
