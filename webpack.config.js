require('babel/register');

const config = require('./config');
const webpackConfig = require('./build/webpack/' + config.get('env'));
module.exports = webpackConfig;