const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// const isDev = process.env.NODE_ENV === 'dev';
// const isProd = process.env.NODE_ENV === 'prod';

const extractCss = new ExtractTextPlugin({
    // filename: "[name].[contenthash].css"
    filename: "app.css"
    // disable: isDev
});

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['lit-html', 'lit-html/lib/lit-extended', 'lit-html/lib/until']
    // webcomponents: ['@webcomponents/webcomponentsjs']
  },  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name].js'
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
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor', filename: 'vendor.bundle.js'
      // name: 'app', children: true
    }),
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
      template: './src/index.html',
      chunksSortMode: 'dependency',
      // inject: false
    }),
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, './node_modules/@webcomponents/webcomponentsjs/webcomponents-lite.js'),
    //   to: 'polyfills'
    // }, ]),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};