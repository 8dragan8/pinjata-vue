var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "./css/[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: 'postcss.config.js'
              }
            }
          },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|ico|xml|json|webmanifest)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src'
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  "useBuiltIns": "usage"
                }
              ]
            ],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader:
          'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src'
        },
      },
    ],
  }
};