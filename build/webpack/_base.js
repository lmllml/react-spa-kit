import webpack from 'webpack';
import config from '../../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = config.get('utils_paths');

const webpackConfig = {
    entry: {
        app: [
          paths.project(config.get('dir_src'))
        ],
        vendor: config.get('vendor_dependencies')
    },
    output: {
        filename: '[name].[hash].js',
        path: paths.project(config.get('dir_dist')),
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
        new HtmlWebpackPlugin({
            template: paths.src('index.html'),
            hash: true,
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude : /node_modules/,
                loader: 'babel'
            }
        ]
    }
}

export default webpackConfig;