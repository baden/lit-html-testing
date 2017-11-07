const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: true,
      uglifyOptions: {
        // ie8: true,
        // mangle: false,
        compress: {
          passes: 3
        },
        output: {
          // beautify: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};