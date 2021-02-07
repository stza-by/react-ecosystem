const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    historyApiFallback: true,
  }
};
