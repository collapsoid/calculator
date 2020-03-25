module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'main.jsx'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, exclude: /node_modules/, use: {loader: 'babel-loader'}},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']}
    ]
  },
  mode: 'production'
};
