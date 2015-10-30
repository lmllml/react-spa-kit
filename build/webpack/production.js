import webpackConfig from './_base';
import webpack from 'webpack';

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
webpackConfig.module.loaders.push({
    test: /\.scss$/,
    loaders: [
        'style-loader',
        'css-loader',
        'autoprefixer?browsers=last 2 version',
        'sass-loader'
    ]
});

export default webpackConfig;