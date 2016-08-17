require('babel-register')({ ignore: /(SacredFS\/lib)|!(SacredFS\/src)/ })

module.exports = require('./src')
