/**
 * @desc webpack配置文件
 * @author Jafeney
 * @dateTime 2016-08-03
 **/

var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.join(__dirname, '/node_modules');

module.exports = {
    entry: {
        bundle: './src/index',
        vendor: ['react', 'react-dom', 'redux']
    },
    output: {
        path: path.join(__dirname, '/build'),
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
        noParse: [
            path.join(nodeModulesPath, '/react/dist/react.min'),
            path.join(nodeModulesPath, '/react-dom/dist/react-dom.min'),
            path.join(nodeModulesPath, '/redux/dist/redux.min'),
        ],
        loaders: [
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(gif|jpg|png)$/, loader: "url?limit=8192&name=images/[name].[hash].[ext]"},
            // 加载icon字体文件
            { test: /\.(woff|svg|eot|ttf)$/, loader: 'url?limit=50000&name=fonts/[name].[hash].[ext]'}
        ]
    },
    externals: { // 外部依赖
        'citys': 'Citys'
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),   //上线时开启
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),   //上线时开启
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ],
};
