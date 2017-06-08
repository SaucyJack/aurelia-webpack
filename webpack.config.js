var { AureliaPlugin } = require('aurelia-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'app': [],
        'aurelia': [
            'aurelia-bootstrapper',
            'aurelia-polyfills',
            'aurelia-pal',
            'aurelia-pal-browser',
            'aurelia-binding',
            'aurelia-dependency-injection',
            'aurelia-event-aggregator',
            'aurelia-framework',
            'aurelia-history',
            'aurelia-history-browser',
            'aurelia-loader',
            'aurelia-loader-webpack',
            'aurelia-logging',
            'aurelia-logging-console',
            'aurelia-metadata',
            'aurelia-path',
            'aurelia-route-recognizer',
            'aurelia-router',
            'aurelia-task-queue',
            'aurelia-templating',
            'aurelia-templating-binding',
            'aurelia-templating-router',
            'aurelia-templating-resources'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        sourceMapFilename: '[name]-bundle.js.map'
    },
    resolve: {
        modules: [path.resolve('src'), 'node_modules'],
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
            { test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins: [
        new AureliaPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: ['aurelia'] }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            chunksSortMode: 'dependency'
        })
    ],
    devServer: {
        port: 3000
    }
};
