var factory = require("../infra/ConnectionFactory");

module.exports = function(app) {
    app.get("/usuario", function(req, res) {
        res.end("Ola mundo!");
    });
}