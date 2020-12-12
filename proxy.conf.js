const PROXY_CONFIG = [{
    context: '/api',
    target: 'https://diversyhub.herokuapp.com',
    pathRewrite: { '^/api': '' },
    secure: true,
    changeOrigin: true,
    logLevel: 'debug'
}, ]

module.exports = PROXY_CONFIG;