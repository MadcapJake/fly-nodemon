const nodemon = require("nodemon")

var server

module.exports = function () {
  this.nodemon = function (opts) {
    if (!server) {
      server = nodemon(opts)
        .on("start", function () {
        this.log("nodemon started.")
        })
        .on("crash", function () {
          this.error("script crashed for some reason")
        })
    } else {
      server.emit("restart")
    }
    return this
  }
}
