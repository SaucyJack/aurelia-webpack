# SFS DBS Email Template Management Tool

## Install
If you don't have Webpack:
`$ npm install webpack -g`
`$ npm install webpack-dev-server -g`

For project:
`$ npm install`

## Run
`$ webpack-dev-server`
Open a browser and navigate to http://localhost:3000

## Steps taken to create project

*After NPM is initialized, the order of the `npm install` statements does not matter*

1. Initialize NPM
   `$ npm init`
2. Install Aurelia project dependencies 
   `$ npm install --save aurelia-bootstrapper-webpack aurelia-event-aggregator aurelia-framework aurelia-history-browser aurelia-loader-webpack aurelia-logging-console aurelia-templating-binding aurelia-templating-resources aurelia-templating-router`
3. Install webpack dev dependencies
   `$ npm install --save-dev webpack webpack-dev-server aurelia-webpack-plugin html-webpack-plugin`
4. Install TypeScript dev dependencies
   `$ npm install --save-dev typescript tslint`
5. Install Webpack loaders
   `$ npm install --save-dev css-loader file-loader html-loader imports-loader resolve-url-loader style-loader ts-loader url-loader`
6. Created webpack.config.js with much copying/pasting.
7. Created tsconfig.json (copy/paste).
8. Built Aurelia project, starting with index.html, as normal.
