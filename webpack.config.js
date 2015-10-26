var output_options = {
    chunks      : false,
    chunkModules: false,
    colors      : true,
    timings     : true
};

module.exports = {
    entry: {
        todo: __dirname + '/todo/todo.jsx'
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
