const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html'),
  }),
];

module.exports = {
  mode,
  plugins,
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    open: true,
    hot: true,
  },

  module: {
  	rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
}