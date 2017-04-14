function UserDAO(connection) {
    this._connection = connection;
}

UserDAO.prototype.register = function(params, callback) {
    var query = this._connection.query("INSERT INTO usuarios (nome, matricula, curso) VALUES (?, ?, ?)",
        [params.nome, params.matricula, params.curso],
        callback);
}

UserDAO.prototype.loginMatricula = function(matricula, callback) {
    var query = this._connection.query("SELECT * FROM usuarios WHERE matricula=?", matricula,
        callback);
    console.log("A chamada foi: "+query.sql);
}

module.exports = function() {
    console.log("Module.exports chamado");
    return UserDAO;
}
