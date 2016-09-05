require('babel-register')({ ignore: /(sacred-fs\/lib)|(SacredFS\/lib)|!(sacred-fs\/src)|!(SacredFS\/src)/ })

module.exports = require('./src')
