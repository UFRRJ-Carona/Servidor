var factory = require("../infra/ConnectionFactory");
var quiosque = require("./quiosque");
var Iconv = require("iconv").Iconv;
//****ATENÇÃO:: O QUIOSQUE PODE TER LIMITAÇÃO DE 12CHARS PARA O POST DE LOGIN*****

module.exports = function(app) {
    app.get("/usuario/:matricula/:senha", function(req, res) {
        function callback(html) {
            var info = html.indexOf("info_us");
            var start =-1;
            var end = -1;
            var text = "";
            var totalText = html.substring(info+8, html.indexOf("/div>",info));
            totalText = totalText.replace("/\t/g","");
            for(var i = 0; i<3; i++) {
                start = totalText.indexOf(">", start+1);
                end = totalText.indexOf("<", end+1  );
                console.log("End: "+end);
                text += "|"+totalText.substring(start, end).trim();
            }

            var mArray = text.split("|");
            teste = mArray[1].replace(/[>\t\n]/g, "");
            console.log("A matricula e:: "+teste);
            res.end(""+teste);
        }
        quiosque(req.params.matricula, req.params.senha, callback);
        //res.end(""+html);
    });

}
