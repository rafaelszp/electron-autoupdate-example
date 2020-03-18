const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {

    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/renderer/components')
        }
    },
    plugins: [
        new CopyPlugin([
          { from: 'src/**/*.html', to: 'html',flatten: true,force:true},
        ]),
      ],

});