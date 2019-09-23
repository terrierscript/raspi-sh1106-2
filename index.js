const { SH1106 } = require("sh1106")
const keys = require("./key")

keys((...args) => {
  console.log(args)
})
