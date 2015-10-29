require('babel/register');

const devServer = require('../build/webpackDevServer'),
      config = require('../config');

const host = config.get('webpack_host');
const port = config.get('webpack_port');

devServer.listen(port, host, function () {
  console.log(`Webpack dev server running at ${host}: ${port}`);
});