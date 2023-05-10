const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/API/",
    createProxyMiddleware({
      target: "https://todoist.com",
      changeOrigin: true,
      cookieDomainRewrite: "localhost",
      // todoist's API checks the origin header
      headers: {
        origin: "https://todoist.com",
      },
    })
  );
};
