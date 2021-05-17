const Stringifier = require('./stringifier')

function stringify (node, builder) {
  let str = new Stringifier(builder)
  str.stringify(node)
}

module.exports = stringify
