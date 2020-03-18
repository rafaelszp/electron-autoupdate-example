const path = require('path');

const config = {
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'src/main/'),
      Renderer: path.resolve(__dirname, 'src/renderer/'),
      Static: path.resolve(__dirname, 'static/'),
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
};

console.log('ELECTRON_WEBPACK_APP_SOURCEMAP',process.env.ELECTRON_WEBPACK_APP_SOURCEMAP)

if(process.env.ELECTRON_WEBPACK_APP_SOURCEMAP===true){
  config.devtool = 'source-map';
}else{
  config.devtool = 'nosources-source-map';
}
module.exports = config;