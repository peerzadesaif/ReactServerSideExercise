const nodeExternals = require('webpack-node-externals')
module.exports = [{
    target: 'node',
    entry: './src/server',
    externals: [nodeExternals()],
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        alias: {
            "@material-ui/core/es": "@material-ui/core/es"
            // 'material-ui': 'material-ui/es',
        }
    },
}]