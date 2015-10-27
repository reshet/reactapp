var output_options = {
    chunks      : false,
    chunkModules: false,
    colors      : true,
    timings     : true
};

module.exports = {
    entry: {
        app: __dirname + '/app/app.jsx'
    },
    output: {
        path        : 'public/',
        publicPath  : 'public/',
        filename    : '[name].min.js'
    },
    module: {
        loaders: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loader: [
                  'react-hot',
                  'babel?optional[]=es7.classProperties&optional[]=es7.objectRestSpread',
                  'eslint'
              ].join('!')
          },
          {
              test: /\.less$/,
              loader: 'style!css!less'
          }
        ]
    },
    resolve: {
        root: __dirname + '/app',
        extensions: [ '', '.js', '.jsx' ]
    },
    stats: output_options,
    devServer: {
        proxy: {
            '*': 'http://localhost:1234/'
        },
        stats: output_options
    }
};
