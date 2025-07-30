const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  target: 'web', // добавляем эту строку
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, "..", "./dist"), // исправлен путь
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true, // добавляем для корректной работы роутинга
  },
  plugins: [
    new ReactRefreshWebpackPlugin(), // выносим плагин из devServer
  ],
};