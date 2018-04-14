const {resolve} = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin('styles.[name].css')
const webpackValidate = require('webpack-validator')

debugger // eslint-disable-line

var config ={
    // context: resolve('src'),
    entry: {
        app: './index.html',
        appboots: './bootstrap.js'
    },
    output: {
        filename: 'bundle.[name].js',
        // path: resolve('dist'),
        // publicPath: '/dist/'
    },
    module: {
      loaders: [
        {
            test: /\.js$/, 
            loader: 'babel-loader', 
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract( {
                fallback: "style-loader",
                use: "css-loader!sass-loader",
            }),
            exclude: /nodemodules/
        },
        // {
        //     test: /\.css$/,
        //     loader: extractSass.extract( 
        //         {
        //             loader:'css',
        //             fallback:'style'
        //         }
        //     ),
        //     // exclude: /nodemodules/
        // },
        // {
        //     test: /\.css$/,
        //     loaders: ['css'],
        //     exclude: /nodemodules/
        // },
        // {
        //     test: /\.scss$/,
        //     loader: 'sass',
        //     exclude: /nodemodules/
        // },
        {
            test: /\.html$/,
            loader: 'html-loader',
            exclude: /nodemodules/
        }
      ],
    },
    plugins: [
        extractSass
    ]
}

module.exports = webpackValidate( config)