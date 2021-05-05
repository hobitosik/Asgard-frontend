const PROXY_CONFIG = [
    {
        context: [ '/auth', '/' ],
        target: 'http://185.178.46.248:9001',
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
    },
]

module.exports = PROXY_CONFIG;
