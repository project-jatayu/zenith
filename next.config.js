const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: function () {
        return {
            '/': { page: '/' }
        }
    }
    assetPrefix: process.env.NODE_ENV === 'production' ? '/zenith' : '',
})
