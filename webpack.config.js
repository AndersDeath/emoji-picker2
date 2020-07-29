const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const path = require('path');

module.exports = {
    mode: "production",
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    devtool: "source-map",
    entry: { home: ['./src/index.tsx', './src/index.scss'], },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".scss"],
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@state': path.resolve(__dirname, './src/state'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@icons': path.resolve(__dirname, './src/icons'),
        }
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.min.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: require.resolve('css-loader'),
                    },
                    {
                        loader: require.resolve('postcss-loader'),
                    },
                    {
                        loader: require.resolve('sass-loader'),
                    },
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "awesome-typescript-loader"
                }]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:20].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ],
};