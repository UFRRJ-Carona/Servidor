var app = require('./config/express')();
var rides = require('./routes/routes')(app);

console.log("Servidor rodando");
app.listen(8080);
