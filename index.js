const nodemon = require("nodemon")

var server,
    started = false,
    quit = false

module.exports = function () {
  this.nodemon = function (opts) {
    return new Promise((resolve, reject) => {
      if (started) { server.emit("restart") }
      else {
        server = nodemon(opts)
          .on("start", function () {
            this.log("nodemon " + (started ? "re" : "") + "started.")
            started = true
            quit = false
            resolve()
          }.bind(this))
          .on("restart", function () {
            this.log("nodemon restarting...")
            resolve()
          }.bind(this))
          .on("quit", function () {
            if (!quit) {
              console.log("")
              this.alert("nodemon quit.")
            }
            quit = true
            started = false
            process.emit("SIGTERM")
            resolve()
          }.bind(this))
          .on("crash", function () {
            this.error("script crashed for some reason")
            quit = true
            started = false
            process.emit("SIGTERM")
            reject()
          }.bind(this))
      }
    })
  }
}
