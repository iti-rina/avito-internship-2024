const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, 'public', 'index.html'),
  }),
  new ForkTsCheckerWebpackPlugin({
    async: false,
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
  }),
];

module.exports = {
  mode,
  plugins,
  entry: './src/app/index.tsx',
  
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    mainFiles: ['index'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@shared': path.resolve(__dirname, 'src/shared/'),
      '@widgets': path.resolve(__dirname, 'src/widgets/'),
      '@entities': path.resolve(__dirname, 'src/entities/')
    }
  },
  module: {
  	rules: [
      { test: /\.(html)$/, use: ['html-loader'] },
      {
        test: /\.(ts|tsx|js)$/,  
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    compress: true,
    port: 8080,
    hot: true,
  },
  devtool: 'source-map',
}