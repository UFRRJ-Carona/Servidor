function UserDAO(connection) {
    this._connection = connection;
}

UserDAO.prototype.register = function(params) {
    var query = this._connection.query("INSERT INTO usuarios (nome, matricula, curso) VALUES (?, ?, ?)",
        [params.nome, params.matricula, params.curso],
        function (error, results) {
            if(error) {
                throw error;
                console.log("Ocorreu um erro...");
                return "Ocorreu um erro...";
            }
            console.log("Usuario registrado com sucesso");
    });
}

module.exports = function() {
    console.log("Module.exports chamado");
    return UserDAO;
}
