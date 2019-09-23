// const { SH1106 } = require("sh1106")

const rpio = require("rpio")
const { LOW } = rpio

// const device = new SH1106()

const buttons = [21, 20, 16, 6, 19, 5, 26]
buttons.map((b) => {
  rpio.open(b, rpio.INPUT, rpio.PULL_UP)
})

module.exports = (onPressKey) => {
  let buffer
  setInterval(() => {
    buttons.map((b) => {
      const l = rpio.read(b)
      // console.log(b, l)
      if (l !== LOW) {
        return
      }
      if (buffer == l) {
        return
      }
      buffer = l
      onPressKey(l)
    })
  }, 10)
}
