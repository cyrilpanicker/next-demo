const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    isProd:isProd,
    ipAddress:'0.0.0.0',
    port: isProd ? 80 : 8080,
    apiBasePath: isProd ? 'http://35.167.129.123/magento/magento2'
        : 'http://35.167.129.123/magento/magento2',
    proxyApiBasePath : isProd ? 'http://localhost/api'
        : 'http://localhost:8080/api',
    apiUrls:{
    },
    proxyApiUrls:{
        home:'/home',
        categories:'/categories/',
        products:'/products/',
        wishlist:'/wishlist'
    }
}