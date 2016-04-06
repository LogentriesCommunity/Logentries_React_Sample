var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    context: __dirname + "/app",
    entry: "app.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          {test: /\.js$/, include: __dirname + '/libs', loader: "babel-loader"}
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};
