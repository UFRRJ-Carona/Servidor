var express = require("config/express");
var app = require('./config/express')();

console.log("Servidor rodando");
app.listen(80);
