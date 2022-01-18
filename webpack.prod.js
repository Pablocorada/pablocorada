const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin           = require('copy-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin       = require('terser-webpack-plugin');

module.exports = {

    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[contenthash].js',
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
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['index']
           
        }),
        new HtmlWebPackPlugin({
            template: './srcabout.html',
            filename: './about.html',
            chunks: ['about']
        }),
        new HtmlWebPackPlugin({
            template: './src/contact.html',
            filename: './contact.html',
            chunks: ['contact']
        }),
        new HtmlWebPackPlugin({
            template: './src/projects.html',
            filename: './projects.html',
            chunks: ['projects']
        }),
        new HtmlWebPackPlugin({
            template: './src/skills.html',
            filename: './skills.html',
            chunks: ['skills']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })
    ]






};