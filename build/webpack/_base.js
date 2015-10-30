import webpack from 'webpack';
import config from '../../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

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
        }),
        new ExtractTextPlugin("[name].css")
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'autoprefixer?browsers=last 2 version',
                    'sass-loader?sourceMap'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    sassLoader: {
        includePaths: paths.src('styles')
    }
}

export default webpackConfig;