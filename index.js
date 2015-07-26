const nodemon = require("nodemon")

var server

module.exports = function () {
  this.nodemon = function (opts) {
    return new Promise((resolve, reject) => {
      if (!server) {
        server = nodemon(opts)
          .on("start", function () {
            this.log("nodemon started.")
          }.bind(this))
          .on("crash", function () {
            this.error("script crashed for some reason")
            reject()
          }.bind(this))
      } else {
        server.emit("restart")
      }
      resolve()
    })
  }
}
