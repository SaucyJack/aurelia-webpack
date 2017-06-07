const path = require('path');
const { AureliaPlugin } = require('aurelia-webpack-plugin');

module.exports = {
    entry: {
        app: ['aurelia-bootstrapper']
    }, 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app-bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new AureliaPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    }
}
