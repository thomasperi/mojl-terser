const { minify } = require('terser');

module.exports = async input => (await minify(input)).code;