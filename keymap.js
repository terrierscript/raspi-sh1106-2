const keyMap = {
  KEY_UP_PIN: 6,
  KEY_DOWN_PIN: 19,
  KEY_LEFT_PIN: 5,
  KEY_RIGHT_PIN: 26,
  KEY_PRESS_PIN: 13,
  KEY1_PIN: 21,
  KEY2_PIN: 20,
  KEY3_PIN: 16
}

const revMap = Object.entries(keyMap).reduce((acc, [key, pinId]) => {
  acc[key] = pinId
}, [])

module.exports.getKeyName = (keyId) => {
  return revMap[keyId]
}

module.exports.keyMap = keyMap
