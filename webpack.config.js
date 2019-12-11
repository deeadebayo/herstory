const path = require('path');

module.exports = {
    entry: './app/assets/js/App.js',
    output: {
        path: path.resolve(__dirname, './dist/public/js'),
        filename: 'script.js'
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            // {
            //     test: /\.scss$/,
            //     use: [{
            //         loader: 'style-loader'
            //     }, {
            //         loader: 'css-loader',
            //         options: {
            //             sourceMap: true,
            //             importLoaders: 1
            //         }
            //     }, {
            //         loader: 'postcss-loader'
            //     }, {
            //         loader: 'sass-loader',
            //         options: {
            //             sourceMap: true
            //         }
            //     }]
            // }
        ]
    },
    mode: 'development'
}