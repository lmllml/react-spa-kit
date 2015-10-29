import webpackConfig from './_base';
import webpack from 'webpack';

webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());

export default webpackConfig;