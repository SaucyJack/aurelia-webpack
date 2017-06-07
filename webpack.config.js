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
        extensions: ['.ts', '.js'],
        modules: [path.resolve('src'), 'node_modules']
    },
    module: {
        rules: [
            { test: /\.ts?$/, loader: 'ts-loader' },
            { test: /\.html?$/, loader: 'html-loader' }
        ]
    },
    plugins: [
        new AureliaPlugin()
    ]
}
