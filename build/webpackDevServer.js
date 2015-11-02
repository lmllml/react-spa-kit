import webpack from 'webpack';
import config from '../config';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack/development';

const paths = config.get('utils_paths');

const server = new WebpackDevServer(
    webpack(webpackConfig),
    {
        contentBase: paths.project(config.get('dir_src')),
        stats: {
            colors: true
        },
        historyApiFallback: true
    }
);
export default server;