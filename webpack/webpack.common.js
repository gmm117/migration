const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist")
  },
  module: {
    rules: [
        {
            test: /\.(js)$/,
            exclude: "/node_modules",
            use: ['babel-loader'],
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            ]
        },
        {
          test: /\.css$/,
          use: [
              MiniCssExtractPlugin.loader, 'css-loader'
          ]
        }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ],
    alias: {
      'calc': './modules/calc'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    }),
    new MiniCssExtractPlugin({
      filename : '[hash].css'
    }),
    new CleanWebpackPlugin() // 빌드전에 dist 폴더를 지워준다.
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin({}), // css minify 할 시 js minify안될경우 terser-webpack-plugin 추가
      new OptimizeCSSAssetsPlugin(), // mini-css-extract-plugin로도 minify가 안되는 경우에 추가 
    ],
  }
};