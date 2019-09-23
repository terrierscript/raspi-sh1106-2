const { SH1106 } = require("sh1106")
const keys = require("./key")

const rand = (max) => Math.ceil(Math.random() * max)
const device = new SH1106()

device.canvas.clear()
console.log("start")

keys((...args) => {
  device.canvas.set(rand(128), rand(64), 1)

  console.log(args)
})
