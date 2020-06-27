// __dirname, path module
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'development'
});