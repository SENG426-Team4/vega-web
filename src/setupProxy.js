const helmet = require('helmet');
const  { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use("/api",
        createProxyMiddleware({
            target: "http://localhost:3000",
            changeOrigin: true
        })
    );
    
    app.use(helmet.frameguard());

    app.use((req, res, next) => {
            //res.header('Content-Security-Policy', "frame-ancestors 'none'");
            //res.header('Content-Security-Policy', "form-action 'self'");
            res.removeHeader("X-Powered-By");
            res.append("X-Content-Type-Options", "nosniff");
            next();
    });
};