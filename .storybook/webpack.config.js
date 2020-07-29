const path = require("path");
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config }) => {

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, STORIES_PATH],
        use: [
            {
                loader: require.resolve("awesome-typescript-loader"),
                options: {
                    configFileName: './.storybook/tsconfig.json'
                }
            },
            { loader: require.resolve("react-docgen-typescript-loader") }
        ]
    });

    config.module.rules.push({
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
                loader: require.resolve('sass-loader'),

            },
        ],
        include: path.resolve(__dirname, '../'),
    });

    config.resolve.extensions.push(".ts", '.tsx', '.scss');

    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))

    return config;



};