const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: ['react-hot-loader/patch', path.join(__dirname, '..', 'src', 'index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|ttf)$/,
        use: {
          loader: 'url-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, '..', 'public', 'index.html') }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, '..', 'public', 'static'),
          to: 'static'
        }
      ]
    })
  ],
}
