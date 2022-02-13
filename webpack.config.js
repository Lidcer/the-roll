const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  //mode: 'development',
  mode: "production",
  entry: {
    content: "./src/index.ts"
  },
  output: {
    path: __dirname,
    filename: `./public/index.js`
  },
  resolve: {
    extensions: ["*", ".js", ".ts"]
  },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: "ts-loader"
      }
    }]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          sourceMap: true,
          ecma: 5,
          mangle: true,
          output: { comments: false },
        },
      }),
    ],
  },
};