 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './src/index.ts',
   },
   module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
   plugins: [
     new HtmlWebpackPlugin({
      inject: "head",
      template: 'dist/index.html'
     }),
   ],
   resolve: {
    extensions: ['.js', '.ts', '.tsx']
   },
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist/js'),
     clean: true,
   },
 };
