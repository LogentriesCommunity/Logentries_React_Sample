const path = require ('path');

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    entry: path.resolve('app','index'),
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve('app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [path.resolve('app','js'), path.resolve('app','index.jsx')],
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015-webpack', 'react']
                }
            }
        ]
    }
};
