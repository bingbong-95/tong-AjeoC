const webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    lintOnSave: false,
    configureWebpack: {
        // Set up all the aliases we use in our app.
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 6
            })
        ]
    },
    devServer: {
        overlay: false
    },
    pwa: {
        name: 'Vue Argon Dashboard',
        themeColor: '#172b4d',
        msTileColor: '#172b4d',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#172b4d'
    },
    css: {
        // Enable CSS source maps.
        sourceMap: process.env.NODE_ENV !== 'production'
    }
};