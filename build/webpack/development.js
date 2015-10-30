import webpackConfig from './_base';
import config from '../../config';

webpackConfig.devtool = 'cheap-source-map';
webpackConfig.output.publicPath = config.get('webpack_protocal') + "://" + config.get('webpack_host') + ":" + config.get('webpack_port') + "/";
webpackConfig.module.loaders.push({
    test: /\.scss$/,
    loaders: [
        'style-loader',
        'css-loader?sourceMap',
        'autoprefixer?browsers=last 2 version',
        'sass-loader?sourceMap'
    ]
});

export default webpackConfig;