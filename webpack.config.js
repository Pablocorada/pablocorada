const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'development',
    output: {
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/i,
                use: ['style-loader', 'css-loader']            
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/about.html',
            filename: './about.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/contact.html',
            filename: './contact.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/projects.html',
            filename: './projects.html',
        }),
        new HtmlWebPackPlugin({
            template: './src/skills.html',
            filename: './skills.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]






};