const path = require('path');

module.exports = {
    resolve: {
        alias: {
            Main: path.resolve(__dirname, 'src/main/'),
            Renderer: path.resolve(__dirname, 'src/renderer/'),
            Static:  path.resolve(__dirname, 'static/'),
        }
    },
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif|ico)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
}