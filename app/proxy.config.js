const PROXY_CONFIG = [
    {
        context: [ '/asgard-api' ],
        target: 'http://185.178.46.248',
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
    },
]

module.exports = PROXY_CONFIG;
