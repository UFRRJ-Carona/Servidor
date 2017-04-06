var http = require("http");
var querystring = require("querystring");

module.exports = function(matricula, senha, mCallback) {
    //Por algum motivo uma nova requisicao é feita com a senha sendo favicon.ico
    //TODO: verificar motivo
    if(senha == "favicon.ico") {
        return;
    }

    var postData = querystring.stringify({
        'edtIdUs': matricula,
        'edtIdSen': senha,
        'btnIdOk': 'Ok'
    });

    var options = {
        host: "academico.ufrrj.br",
        method: "POST",
        path: "/quiosque/aluno/quiosque.php",
        headers: {
            "Content-Length": postData.length,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }

    var html = "";
    var req = http.request(options, (res) => {
        res.setEncoding("utf8");
        res.on("data", (response) => {
            html += response;
        });
        res.on("end", () => {
            mCallback(html);
        })
    });

    req.write(postData);
    req.end();

    //return html;
}
