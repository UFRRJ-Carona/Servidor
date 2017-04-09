var factory = require("../infra/ConnectionFactory");
var quiosque = require("./quiosque");
var UserDAO = require("../infra/UserDAO")();
//****ATENÇÃO:: O QUIOSQUE PODE TER LIMITAÇÃO DE 12CHARS PARA O POST DE LOGIN*****

module.exports = function(app) {
    app.get("/usuario/:matricula/:senha", function(req, res) {
        function callback(html) {
            var info = html.indexOf("info_us");
            if(info === -1) {
                res.status(403).end("Matricula ou senha incorretos");
            }
            var start =-1;
            var end = -1;
            var text = "";
            var totalText = html.substring(info+8, html.indexOf("/div>",info));
            for(var i = 0; i<3; i++) {
                start = totalText.indexOf(">", start+1);
                end = totalText.indexOf("<", end+1  );
                text += "|"+totalText.substring(start, end).trim();
            }

            var mArray = text.split("|");
            var json = {
                "matricula": mArray[1].replace(/[>\t\n\r]/g, ""),
                "nome": mArray[2].replace(/[>\t\n\r]/g, ""),
                "curso": mArray[3].replace(/[>\t\n\r]/g, "")
            };
            var dao = new UserDAO(factory());
            dao.register(json);
            res.json(json);
        }
        quiosque(req.params.matricula, req.params.senha, callback);
    });

}
