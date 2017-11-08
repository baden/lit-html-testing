const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const isDev = process.env.NODE_ENV === 'dev';
// const isProd = process.env.NODE_ENV === 'prod';

const extractCss = new ExtractTextPlugin({
    // filename: "[name].[contenthash].css"
    filename: "app.css"
    // disable: isDev
});


module.exports = {
  entry: {
    index: './src/index.js'    
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: "css-loader" }
        ]
      })
    }
  ]
  },
  plugins: [
    new UglifyJSPlugin({ 
      sourceMap: true,
      uglifyOptions: {
        // ie8: true,
        mangle: false,
        compress: {
          passes: 3
        },
        output: {
          beautify: true
        }
      }
    }),
    extractCss,
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};